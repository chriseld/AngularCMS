CREATE TABLE `books` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `userId` int NOT NULL,
  `cover` longblob,
  `blurb` mediumtext,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
)

--azure

CREATE TABLE books (
  id int NOT NULL IDENTITY,
  name varchar(255) NOT NULL,
  userid int NOT NULL,
  cover varbinary(MAX),
  blurb varchar(MAX),
  datecreated datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  CONSTRAINT name_unique UNIQUE (name)
)
