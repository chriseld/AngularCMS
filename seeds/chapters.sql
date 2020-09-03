CREATE TABLE `chapters` (
  `id` int NOT NULL AUTO_INCREMENT,
  `bookId` int NOT NULL,
  `chapterText` longblob NOT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
)

--azure

CREATE TABLE chapters (
  id int NOT NULL IDENTITY,
  bookid int NOT NULL,
  chaptertext varbinary(MAX) NOT NULL,
  datecreated datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
)
