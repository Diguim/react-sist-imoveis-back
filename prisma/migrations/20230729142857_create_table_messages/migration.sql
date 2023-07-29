-- CreateTable
CREATE TABLE `messages` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `client_name` VARCHAR(191) NOT NULL,
    `client_email` VARCHAR(191) NOT NULL,
    `client_message` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `messages` ADD CONSTRAINT `messages_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
