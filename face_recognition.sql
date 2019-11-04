
CREATE DATABASE IF NOT EXISTS Face_recognition;
use Face_recognition;

CREATE TABLE IF NOT EXISTS  Organisation (
					Organisation_id INT AUTO_INCREMENT PRIMARY KEY,
					Organisation_name char(50) NOT NULL UNIQUE,
					deleted TINYINT(1) NOT NULL DEFAULT 0,
					creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
					last_update DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
					)ENGINE = INNODB CHARACTER SET=utf8;

CREATE TABLE IF NOT EXISTS  User_Type ( 
					User_type_id INT AUTO_INCREMENT PRIMARY KEY,
					User_type CHAR(25) NOT NULL UNIQUE ,
					Organiaion_id int NOT NULL,
					deleted TINYINT(1) NOT NULL DEFAULT 0,
					creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
					last_update DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
					FOREIGN KEY (Organisation_id) REFERENCES Organisation(Organisation_id)
					) ENGINE = INNODB CHARACTER SET=utf8;

CREATE TABLE IF NOT EXISTS  Subject ( 
					Subject_id INT AUTO_INCREMENT PRIMARY KEY, 
					subject_name char(50),
					deleted TINYINT(1) NOT NULL DEFAULT 0,
					creation_date DATETIME DEFAULT CURRENT_TIMESTAMP, 
					last_update DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
					) ENGINE = INNODB CHARACTER SET=utf8;

CREATE TABLE IF NOT EXISTS User ( 
					user_id INT AUTO_INCREMENT PRIMARY KEY,
					user_First_name CHAR(25) NOT NULL ,
					User_last_Name char(50) NOT NULL ,
					User_email varchar(50) NOT NULL UNIQUE,
					user_contact_number numeric(9,2) NOT NULL UNIQUE,
					is_face_register TINYINT(1) NOT NULL DEFAULT 0,
					is_pin_set TINYINT(1) NOT NULL DEFAULT 0,
					user_type_id int NOT NULL ,
					deleted TINYINT(1) NOT NULL DEFAULT 0, 
					creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
					last_update DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
					FOREIGN KEY (user_type_id) REFERENCES user_type(user_type_id)
				)ENGINE = INNODB CHARACTER SET=utf8;


CREATE TABLE IF NOT EXISTS Student_details ( 
						student_detail_id INT AUTO_INCREMENT PRIMARY KEY,
						student_batch char(10) NOT NULL,
						user_id int NOT NULL ,
						subject_id int NOT NULL,
						FOREIGN KEY (user_id) REFERENCES user(user_id),
						FOREIGN KEY (subject_id) REFERENCES subject(subject_id),
						deleted TINYINT(1) NOT NULL DEFAULT 0,
						creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
						last_update DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
					)ENGINE = INNODB CHARACTER SET=utf8;

CREATE TABLE IF NOT EXISTS teacher_deatils ( 
						teacher_detail_id INT AUTO_INCREMENT PRIMARY KEY,
						teacher_year char(10) NOT NULL,
						user_id int NOT NULL ,
						subject_id int NOT NULL,
						FOREIGN KEY (user_id) REFERENCES user(user_id),
						FOREIGN KEY (subject_id) REFERENCES subject(subject_id),
						deleted TINYINT(1) NOT NULL DEFAULT 0, 
						creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
						last_update DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
					)ENGINE = INNODB CHARACTER SET=utf8;

CREATE TABLE IF NOT EXISTS user_pin (
					id INT AUTO_INCREMENT PRIMARY KEY,
					pin  CHAR(5) NOT NULL UNIQUE,
					user_id int NOT NULL , 
					deleted TINYINT(1) NOT NULL DEFAULT 0, 
					creation_date DATETIME DEFAULT CURRENT_TIMESTAMP, 
					last_update DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
					FOREIGN KEY (user_id) REFERENCES user(user_id)
					)ENGINE = INNODB CHARACTER SET=utf8;

CREATE TABLE IF NOT EXISTS user_activity_logs ( 
						id INT AUTO_INCREMENT PRIMARY KEY,
						user_id int NOT NULL UNIQUE ,
						last_access DATETIME DEFAULT CURRENT_TIMESTAMP, 
						last_update DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
						FOREIGN KEY (user_id) REFERENCES user(user_id)
						)ENGINE = INNODB CHARACTER SET=utf8;

