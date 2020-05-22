CREATE TABLE `name_cms`.`bookmarks` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userId` INT NOT NULL,
  `bookId` INT NOT NULL,
  `chapterId` INT NOT NULL,
  PRIMARY KEY (`id`));