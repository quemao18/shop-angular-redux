/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50721
Source Host           : localhost:3306
Source Database       : mpos_shop

Target Server Type    : MYSQL
Target Server Version : 50721
File Encoding         : 65001

Date: 2020-10-15 13:37:16
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `categories`
-- ----------------------------
DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
  `category_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of categories
-- ----------------------------
INSERT INTO `categories` VALUES ('1', 'Vegetales');
INSERT INTO `categories` VALUES ('2', 'Fruits');

-- ----------------------------
-- Table structure for `customers`
-- ----------------------------
DROP TABLE IF EXISTS `customers`;
CREATE TABLE `customers` (
  `customer_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `id` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  PRIMARY KEY (`customer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of customers
-- ----------------------------
INSERT INTO `customers` VALUES ('1', 'toba', 'toba', 'alejandro.toba@gmail.com', 'toba');
INSERT INTO `customers` VALUES ('2', 'Alejandro', 'qqqq', 'alejandro.tob2a@gmail.com', 'san antonio');
INSERT INTO `customers` VALUES ('3', 'Alejandro', 'alejandro.toba3@gmail.com', 'alejandro.toba3@gmail.com', 'aqui');

-- ----------------------------
-- Table structure for `orders`
-- ----------------------------
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL AUTO_INCREMENT,
  `price` int(11) NOT NULL,
  `qty` int(11) NOT NULL,
  `id` varchar(255) NOT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`order_id`),
  KEY `FK_772d0ce0473ac2ccfa26060dbe9` (`customer_id`),
  KEY `FK_ac832121b6c331b084ecc4121fd` (`product_id`),
  CONSTRAINT `FK_772d0ce0473ac2ccfa26060dbe9` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_ac832121b6c331b084ecc4121fd` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of orders
-- ----------------------------
INSERT INTO `orders` VALUES ('28', '44', '1', '15eER3', '1', '31');
INSERT INTO `orders` VALUES ('29', '99', '1', '15eER3', '1', '21');
INSERT INTO `orders` VALUES ('30', '44', '1', '21r5tS', '1', '31');
INSERT INTO `orders` VALUES ('31', '44', '1', '5c6sS8', '1', '26');
INSERT INTO `orders` VALUES ('32', '3', '1', '5c6sS8', '1', '12');
INSERT INTO `orders` VALUES ('33', '44', '1', 'CrT6E7', '1', '31');
INSERT INTO `orders` VALUES ('34', '4', '1', '75968B', '1', '23');
INSERT INTO `orders` VALUES ('35', '4', '1', '1RRB11', '1', '23');
INSERT INTO `orders` VALUES ('36', '44', '1', '8e1h6e', '1', '31');
INSERT INTO `orders` VALUES ('37', '44', '1', '4b9rht', '1', '31');
INSERT INTO `orders` VALUES ('38', '4', '1', 'T2HRcb', '1', '23');
INSERT INTO `orders` VALUES ('39', '44', '1', '8c3rBH', '1', '31');
INSERT INTO `orders` VALUES ('40', '4', '1', 'ts4CrB', '1', '23');
INSERT INTO `orders` VALUES ('41', '99', '1', 'ts4CrB', '1', '21');
INSERT INTO `orders` VALUES ('42', '4', '4', '782s45', '1', '23');
INSERT INTO `orders` VALUES ('43', '4', '4', 'crSEs9', '1', '23');
INSERT INTO `orders` VALUES ('44', '44', '1', 'crSEs9', '1', '31');
INSERT INTO `orders` VALUES ('45', '44', '1', 'EhTe30', '1', '31');
INSERT INTO `orders` VALUES ('46', '44', '1', 'T5s1rt', '1', '31');
INSERT INTO `orders` VALUES ('47', '44', '1', 'aES2s7', '3', '31');
INSERT INTO `orders` VALUES ('48', '5', '3', '67E013', '3', '19');
INSERT INTO `orders` VALUES ('49', '44', '1', '071Trc', '3', '31');

-- ----------------------------
-- Table structure for `products`
-- ----------------------------
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `product_id` int(11) NOT NULL AUTO_INCREMENT,
  `category_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  PRIMARY KEY (`product_id`),
  KEY `FK_9a5f6868c96e0069e699f33e124` (`category_id`),
  CONSTRAINT `FK_9a5f6868c96e0069e699f33e124` FOREIGN KEY (`category_id`) REFERENCES `categories` (`category_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of products
-- ----------------------------
INSERT INTO `products` VALUES ('9', '2', 'Lemons3', 'Sumptuous egg sandwich', 'https://images.unsplash.com/photo-1504382262782-5b4ece78642b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&h=200&q=80', '12');
INSERT INTO `products` VALUES ('11', '1', 'Berries3', 'Sweet popsicles to help with the heat', 'https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&h=200&q=80', '24');
INSERT INTO `products` VALUES ('12', '2', 'Orange3', 'Mouth watering burger. Who cares if it\'s healthy', 'https://images.unsplash.com/photo-1504185945330-7a3ca1380535?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=200&w=200&q=80', '3');
INSERT INTO `products` VALUES ('15', '1', 'Apples3', 'Great looking Waffle to start the day', 'https://images.unsplash.com/photo-1505253304499-671c55fb57fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&h=200&q=80', '44');
INSERT INTO `products` VALUES ('16', '1', 'Sharifa', 'What\'s greater than 5 minutes with grilled corn', 'https://images.unsplash.com/photo-1470119693884-47d3a1d1f180?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80', '10');
INSERT INTO `products` VALUES ('17', '1', 'Blue2', 'What\'s greater than 5 minutes with grilled corn', 'https://images.unsplash.com/photo-1470119693884-47d3a1d1f180?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80', '88');
INSERT INTO `products` VALUES ('18', '1', 'Red2', 'What\'s greater than 5 minutes with grilled corn', 'https://images.unsplash.com/photo-1470119693884-47d3a1d1f180?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80', '44');
INSERT INTO `products` VALUES ('19', '2', 'Cherry2', 'Sumptuous egg sandwich', 'https://images.unsplash.com/photo-1504382262782-5b4ece78642b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&h=200&q=80', '5');
INSERT INTO `products` VALUES ('20', '2', 'Lemons2', 'Sumptuous egg sandwich', 'https://images.unsplash.com/photo-1504382262782-5b4ece78642b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&h=200&q=80', '22');
INSERT INTO `products` VALUES ('21', '1', 'Berries2', 'Sweet popsicles to help with the heat', 'https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&h=200&q=80', '99');
INSERT INTO `products` VALUES ('22', '2', 'Orange2', 'Mouth watering burger. Who cares if it\'s healthy', 'https://images.unsplash.com/photo-1504185945330-7a3ca1380535?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=200&w=200&q=80', '66');
INSERT INTO `products` VALUES ('23', '1', 'Apples2', 'Great looking Waffle to start the day', 'https://images.unsplash.com/photo-1505253304499-671c55fb57fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&h=200&q=80', '4');
INSERT INTO `products` VALUES ('24', '1', 'Sharifa2', 'What\'s greater than 5 minutes with grilled corn', 'https://images.unsplash.com/photo-1470119693884-47d3a1d1f180?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80', '33');
INSERT INTO `products` VALUES ('25', '1', 'Blue', 'What\'s greater than 5 minutes with grilled corn', 'https://images.unsplash.com/photo-1470119693884-47d3a1d1f180?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80', '77');
INSERT INTO `products` VALUES ('26', '1', 'Red', 'What\'s greater than 5 minutes with grilled corn', 'https://images.unsplash.com/photo-1470119693884-47d3a1d1f180?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80', '44');
INSERT INTO `products` VALUES ('27', '2', 'Mango', 'Sumptuous egg sandwich', 'https://images.unsplash.com/photo-1504382262782-5b4ece78642b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&h=200&q=80', '12');
INSERT INTO `products` VALUES ('28', '2', 'Brocoli', 'Sumptuous egg sandwich', 'https://images.unsplash.com/photo-1504382262782-5b4ece78642b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&h=200&q=80', '6');
INSERT INTO `products` VALUES ('29', '1', 'Onions', 'Sweet popsicles to help with the heat', 'https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&h=200&q=80', '24');
INSERT INTO `products` VALUES ('30', '2', 'Orange', 'Mouth watering burger. Who cares if it\'s healthy', 'https://images.unsplash.com/photo-1504185945330-7a3ca1380535?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=200&w=200&q=80', '8');
INSERT INTO `products` VALUES ('31', '1', 'Apples', 'Great looking Waffle to start the day', 'https://images.unsplash.com/photo-1505253304499-671c55fb57fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&h=200&q=80', '44');
INSERT INTO `products` VALUES ('32', '1', 'Sandia', 'What\'s greater than 5 minutes with grilled corn', 'https://images.unsplash.com/photo-1470119693884-47d3a1d1f180?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80', '10');
INSERT INTO `products` VALUES ('33', '1', 'Blue', 'What\'s greater than 5 minutes with grilled corn', 'https://images.unsplash.com/photo-1470119693884-47d3a1d1f180?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80', '77');
INSERT INTO `products` VALUES ('34', '1', 'Red', 'What\'s greater than 5 minutes with grilled corn', 'https://images.unsplash.com/photo-1470119693884-47d3a1d1f180?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80', '44');
INSERT INTO `products` VALUES ('35', '2', 'Yellow', 'Sumptuous egg sandwich', 'https://images.unsplash.com/photo-1504382262782-5b4ece78642b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&h=200&q=80', '12');
