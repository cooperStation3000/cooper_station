-- SQL dump generated using DBML (dbml-lang.org)
-- Database: MySQL
-- Generated at: 2022-08-08T10:34:05.443Z

CREATE TABLE `project` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `project_name` varchar(30) COMMENT '项目名称',
  `project_owner` varchar(30) COMMENT ' 项目拥有人',
  `create_time` varchar(30),
  `update_time` varchar(30),
  `isDel` boolean DEFAULT false
);

CREATE INDEX `project_name` ON `project` (`project_name`);

CREATE INDEX `project_owner` ON `project` (`project_owner`);
