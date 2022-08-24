# weixin_app
小程序作业

项目目录————

    ----weixin_app

    |--database   #存放数据库相关文档
    
        |-stomatology.sql   #包含部分测试数据的Mysql数据库转储文件

    |--Dens   #微信小程序前端（me.js里为了测试接口代码添加了一些东西）

    |--api    #微信小程序后端（python——FastApi）

        |--env   #虚拟环境（目前安装了Django，FastApi，sqlalchemy，pymysql)

        |--py    #存放脚本

            |--FastAPI   #存放使用FastAPI写的后端脚本（未来写个Django版可能性犹存？）
            
                |-main.py   #主入口，运行这个
                
                |-models.py   #存放模型
                
                |-database.py   #数据库设置（第一次安装的时候建议看一下设置端口用户名有没有问题）
                
                |-schemas.py    #sqlalchemy和pydantic，orm模型通过pydantic模型进行验证
                
                |-crud.py   #对数据库的具体操作

# 如何安装/调试：

1、database中找到stomatology.sql，导入到mysql中

2、vscode打开api文件夹，终端env/Scripts/Activate（注意解释器路径为..\weixin_app\api\env\Scripts\python.exe）

3、进入env虚拟环境，run main.py，可以测试一下 http://127.0.0.1:8000/users/1 和 http://127.0.0.1:8000/users/2 是否和数据库user表内数据对应

4、在run main.py的状态下，编译Dens（微信小程序前端），切换至个人中心（me），确认一下console.log（res）
