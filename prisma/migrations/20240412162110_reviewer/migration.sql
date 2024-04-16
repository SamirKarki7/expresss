/*
  Warnings:

  - You are about to drop the column `restaurantId` on the `Contact` table. All the data in the column will be lost.
  - You are about to drop the column `restaurantId` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Review` table. All the data in the column will be lost.
  - Added the required column `restaurantid` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `restaurantid` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userid` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Contact" DROP CONSTRAINT "Contact_restaurantId_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_restaurantId_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_userId_fkey";

-- AlterTable
ALTER TABLE "Contact" DROP COLUMN "restaurantId",
ADD COLUMN     "restaurantid" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Review" DROP COLUMN "restaurantId",
DROP COLUMN "userId",
ADD COLUMN     "restaurantid" INTEGER NOT NULL,
ADD COLUMN     "userid" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_restaurantid_fkey" FOREIGN KEY ("restaurantid") REFERENCES "Restaurant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_restaurantid_fkey" FOREIGN KEY ("restaurantid") REFERENCES "Restaurant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
