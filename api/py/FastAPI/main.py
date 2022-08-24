from fastapi import FastAPI, Depends, HTTPException
import crud, schemas
from database import SessionLocal, engine, Base
from sqlalchemy.orm import Session
import uvicorn

Base.metadata.create_all(bind=engine) #数据库初始化，如果没有库或者表，会自动创建

app = FastAPI()


# Dependency
def get_db():
    """
    每一个请求处理完毕后会关闭当前连接，不同的请求使用不同的连接
    :return:
    """
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# 获取全部用户
@app.get("/users/")
def get_users(db: Session = Depends(get_db)):
    return crud.get_users(db=db)

# 通过id查询用户
@app.get("/get_userbyUID/{UID}", response_model=schemas.User)
def get_userbyUID(UID: int, db: Session = Depends(get_db)):
    db_user = crud.get_userbyUID(db, UID)
    if not db_user:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user

# 通过用户名模糊查询用户
@app.get("/get_usersbyUName/{UName}")
def get_usersbyUName(UName: str, db: Session = Depends(get_db)):
    db_user = crud.get_usersbyUName(db, UName)
    if not db_user:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user

# 创建用户
@app.post("/create_user/", response_model=schemas.User)
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    return crud.create_user(db=db, user=user)

# 获取全部医生
@app.get("/doctors/")
def get_doctors(db: Session = Depends(get_db)):
    return crud.get_doctors(db=db)

# 通过姓名模糊查询医生
@app.get("/get_doctorsbyDName/{DName}")
def get_doctorsbyDName(DName: str, db: Session = Depends(get_db)):
    db_doctor = crud.get_doctorsbyDName(db, DName)
    if not db_doctor:
        raise HTTPException(status_code=404, detail="Doctor not found")
    return db_doctor

# 获取全部预约记录
@app.get("/appointments/")
def get_appointments(db: Session = Depends(get_db)):
    return crud.get_appointments(db=db)

# 获取全部付费记录
@app.get("/payments/")
def get_payments(db: Session = Depends(get_db)):
    return crud.get_payments(db=db)
    
# 新建用户
@app.post("/user/", response_model=schemas.User)
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    return crud.db_create_usertest(db=db, user=user)

if __name__ == '__main__':
    uvicorn.run(app=app, host="127.0.0.1", port=8000)