from email.policy import default
from sqlalchemy import ForeignKey, Column, Integer, String
from database import Base


class User(Base):
    __tablename__ = "user"
    UID = Column(Integer, primary_key=True, index=True,autoincrement=True)
    UName = Column(String(20), nullable=False)
    USex = Column(String(2),default="男")
    UAge = Column(Integer)
    UTel = Column(String(11),unique=True)
    UAddress = Column(String(255))

class Doctor(Base):
    __tablename__ = "doctor"
    DID = Column(Integer, primary_key=True, index=True,autoincrement=True)
    DName = Column(String(20), nullable=False)
    DSex = Column(String(2),default="男")
    DAge = Column(Integer)
    DTel = Column(String(11),unique=True)
    DAddress = Column(String(255))
    DField = Column(Integer,nullable=False)

class Appointment(Base):
    __tablename__ = "appointment"
    ApID = Column(Integer, primary_key=True, index=True,autoincrement=True)
    DID = Column(Integer, ForeignKey('doctor.DID',ondelete='NO ACTION'))
    UID = Column(Integer,ForeignKey('user.UID',ondelete="NO ACTION"))
    ApTime = Column(String(12),nullable=False)
    ApSubmitTime = Column(String(16),nullable=False)
    ApStatus = Column(Integer,nullable=False)
    Remark=Column(String(255))