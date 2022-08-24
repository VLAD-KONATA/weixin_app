from sqlalchemy.orm import Session
import models, schemas

# 获取全部用户
def get_users(db: Session):
    return db.query(models.User).all()

# 通过UID查询用户
def get_userbyUID(db: Session, UID: int):
    return db.query(models.User).filter(models.User.UID == UID).first()

# 通过用户名模糊查询用户
def get_usersbyUName(db: Session, UName: str ):
    return db.query(models.User).filter(models.User.UName.like("%"+UName+"%")).all()

# 创建新用户
def create_user(db: Session, user: schemas.UserCreate):
    db_user = models.User(UName=user.UName,USex=user.USex,UAge=user.UAge,UAddress=user.UAddress)
    db.add(db_user)
    db.commit()  # 提交保存到数据库中
    db.refresh(db_user)  # 刷新
    return db_user

# 获取全部医生
def get_doctors(db: Session):
    return db.query(models.Doctor).all()

# 通过姓名模糊查询医生
def get_doctorsbyDName(db: Session, DName: str):
    return db.query(models.Doctor).filter(models.Doctor.DName.like("%"+DName+"%")).all()

# 获取全部预约记录
def get_appointments(db: Session):
    return db.query(models.Appointment).all()

# 获取全部付费记录
def get_payments(db: Session):
    return db.query(models.Payment).all()

# 新建用户
def db_create_usertest(db: Session, user: schemas.UserCreate):
    fake_hashed_password = user.password + "notreallyhashed"
    db_user = models.User(email=user.email, hashed_password=fake_hashed_password)
    db.add(db_user)
    db.commit()  # 提交保存到数据库中
    db.refresh(db_user)  # 刷新
    return db_user