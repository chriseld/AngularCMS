CREATE TABLE `name_cms`.`bookmarks` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userId` INT NOT NULL,
  `bookId` INT NOT NULL,
  `chapterId` INT NOT NULL,
  PRIMARY KEY (`id`));

  --azure

  CREATE TABLE bookmarks (
  id INT NOT NULL IDENTITY,
  userid INT NOT NULL,
  bookid INT NOT NULL,
  chapterId INT NOT NULL,
  PRIMARY KEY (id));