/*
 Navicat Premium Data Transfer

 Source Server         : myXAMPP
 Source Server Type    : MySQL
 Source Server Version : 100421
 Source Host           : localhost:3306
 Source Schema         : stomatology

 Target Server Type    : MySQL
 Target Server Version : 100421
 File Encoding         : 65001

 Date: 23/08/2022 21:54:16
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for appointment
-- ----------------------------
DROP TABLE IF EXISTS `appointment`;
CREATE TABLE `appointment`  (
  `ApID` int(5) NOT NULL AUTO_INCREMENT COMMENT '预约单号',
  `DID` int(5) NOT NULL COMMENT '医生编号',
  `UID` int(5) NOT NULL COMMENT '患者编号',
  `ApTime` char(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '预约时间（YYYYMMDDHHMM,例：202208221605）',
  `ApSubmitTime` char(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '提交时间（YYYYMMDDHHMMSS,例：20220822082259）',
  `ApStatus` int(2) NOT NULL COMMENT '状态（0：已取消，1：待确认，2：预约成功）',
  `Remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`ApID`) USING BTREE,
  INDEX `DID`(`DID`) USING BTREE,
  INDEX `UID`(`UID`) USING BTREE,
  CONSTRAINT `appointment_ibfk_1` FOREIGN KEY (`DID`) REFERENCES `doctor` (`DID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `appointment_ibfk_2` FOREIGN KEY (`UID`) REFERENCES `user` (`UID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of appointment
-- ----------------------------
INSERT INTO `appointment` VALUES (1, 1, 1, '202208222030', '20220822050007', 1, '牙歪了');

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article`  (
  `AID` int(5) NOT NULL AUTO_INCREMENT,
  `ATitle` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `ADate` date NULL DEFAULT NULL,
  `AArthur` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `AClickRate` int(5) NULL DEFAULT 0,
  `AType` int(3) NULL DEFAULT NULL,
  `AContent` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  PRIMARY KEY (`AID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES (1, '口腔新闻A', '2022-04-24', 'admin', 0, 1, '这是一篇口腔新闻');
INSERT INTO `article` VALUES (2, '测试', '2022-03-01', '作者A', 0, 1, '测试文章');
INSERT INTO `article` VALUES (3, '口腔小知识A', '2022-04-20', '作者B', 0, 2, '这是一篇口腔小知识文章');

-- ----------------------------
-- Table structure for doctor
-- ----------------------------
DROP TABLE IF EXISTS `doctor`;
CREATE TABLE `doctor`  (
  `DID` int(5) NOT NULL AUTO_INCREMENT COMMENT '医生编号',
  `DName` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '姓名',
  `DSex` char(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '男' COMMENT '性别',
  `DAge` int(3) NULL DEFAULT NULL COMMENT '年龄',
  `DTel` char(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '联系方式',
  `DAddress` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '住址',
  `DField` int(2) NOT NULL COMMENT '工作领域（0：洗牙，1：牙齿矫正，2：补牙，3：牙齿疾病综合）',
  PRIMARY KEY (`DID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of doctor
-- ----------------------------
INSERT INTO `doctor` VALUES (1, '医生A', '男', 25, '11111111111', '上海工地大学', 2);

-- ----------------------------
-- Table structure for payment
-- ----------------------------
DROP TABLE IF EXISTS `payment`;
CREATE TABLE `payment`  (
  `PID` int(5) NOT NULL AUTO_INCREMENT COMMENT '账单号',
  `DID` int(5) NOT NULL COMMENT '医生编号',
  `UID` int(5) NOT NULL COMMENT '患者编号',
  `PSubmitTime` char(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '提交时间（YYYYMMDDHHMMSS,例：20220822082259）',
  `PAmount` float(8, 2) NOT NULL COMMENT '金额',
  `PStatus` int(2) NOT NULL COMMENT '状态（0：已取消，1：待支付，2：支付成功）',
  `Remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`PID`) USING BTREE,
  INDEX `DID`(`DID`) USING BTREE,
  INDEX `UID`(`UID`) USING BTREE,
  CONSTRAINT `payment_ibfk_1` FOREIGN KEY (`DID`) REFERENCES `doctor` (`DID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `payment_ibfk_2` FOREIGN KEY (`UID`) REFERENCES `user` (`UID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of payment
-- ----------------------------
INSERT INTO `payment` VALUES (1, 1, 1, '20220822212059', 12008.50, 2, '整牙费用');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `UID` int(5) NOT NULL AUTO_INCREMENT COMMENT '患者编号',
  `UName` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '姓名',
  `USex` char(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '男' COMMENT '性别',
  `UAge` int(3) NULL DEFAULT NULL COMMENT '年龄',
  `UTel` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '联系方式',
  `UAddress` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '住址',
  PRIMARY KEY (`UID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, '用户A', '男', 25, '11111111111', '上海工地大学');
INSERT INTO `user` VALUES (2, '用户B', '女', 20, '11122233344', '上海理工大学');

SET FOREIGN_KEY_CHECKS = 1;
