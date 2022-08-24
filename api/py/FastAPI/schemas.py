from pydantic import BaseModel



class UserCreate(BaseModel):
    """
    请求模型验证：
    UName:str
    """
    UName :str
    USex :str="男"
    UAge :int=None
    UTel :str=None
    UAddress :str=None


class User(BaseModel):
    """
    响应模型：
    UID
    UName
    USex
    UAge
    UTel
    UAddress
    并且设置orm_mode与之兼容
    """
    UID :int
    UName :str
    USex :str="男"
    UAge :int=None
    UTel :str=None
    UAddress :str=None

    class Config:
        orm_mode = True