from pydantic import BaseModel
from fastapi import FastAPI

# 创建服务对象
app = FastAPI()

# get --------------------------------
@app.get("/")
async def hello():
    return {"message": "Hello World"}
# ------------------------------------

# post ------------------------------------------------------
class Publication(BaseModel):
    title: str
    abstract: str
@app.post("/findPublication")
async def findPublication(pc: Publication):
    return {"message": "{}-{}".format(pc.title, pc.abstract)}
# -----------------------------------------------------------

if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app="main:app", host="127.0.0.1", port=8000, reload=True)

