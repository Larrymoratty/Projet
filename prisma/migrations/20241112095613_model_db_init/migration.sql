/*
  Warnings:

  - You are about to drop the column `direction_id` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `chef_direction` on the `Direction` table. All the data in the column will be lost.
  - You are about to drop the column `direction_id` on the `ModePayment` table. All the data in the column will be lost.
  - You are about to drop the column `direction_id` on the `Need` table. All the data in the column will be lost.
  - You are about to drop the column `service_id` on the `Need` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Need` table. All the data in the column will be lost.
  - You are about to drop the column `direction_id` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `modePayment_id` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `response_id` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `direction_id` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `direction_id` on the `Response` table. All the data in the column will be lost.
  - You are about to drop the column `need_id` on the `Response` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Response` table. All the data in the column will be lost.
  - You are about to drop the column `chef_service` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `direction_id` on the `Service` table. All the data in the column will be lost.
  - Added the required column `directionId` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `chefDirection` to the `Direction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ministereId` to the `Direction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `directionId` to the `ModePayment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `directionId` to the `Need` table without a default value. This is not possible if the table is not empty.
  - Added the required column `serviceId` to the `Need` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Need` table without a default value. This is not possible if the table is not empty.
  - Added the required column `directionId` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `modePaymentId` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `responseId` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `directionId` to the `Response` table without a default value. This is not possible if the table is not empty.
  - Added the required column `needId` to the `Response` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Response` table without a default value. This is not possible if the table is not empty.
  - Added the required column `chefService` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `directionId` to the `Service` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_direction_id_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_user_id_fkey";

-- DropForeignKey
ALTER TABLE "ModePayment" DROP CONSTRAINT "ModePayment_direction_id_fkey";

-- DropForeignKey
ALTER TABLE "Need" DROP CONSTRAINT "Need_direction_id_fkey";

-- DropForeignKey
ALTER TABLE "Need" DROP CONSTRAINT "Need_service_id_fkey";

-- DropForeignKey
ALTER TABLE "Need" DROP CONSTRAINT "Need_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_direction_id_fkey";

-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_modePayment_id_fkey";

-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_response_id_fkey";

-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_direction_id_fkey";

-- DropForeignKey
ALTER TABLE "Response" DROP CONSTRAINT "Response_direction_id_fkey";

-- DropForeignKey
ALTER TABLE "Response" DROP CONSTRAINT "Response_need_id_fkey";

-- DropForeignKey
ALTER TABLE "Response" DROP CONSTRAINT "Response_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Service" DROP CONSTRAINT "Service_direction_id_fkey";

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "direction_id",
DROP COLUMN "user_id",
ADD COLUMN     "directionId" INTEGER NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Direction" DROP COLUMN "chef_direction",
ADD COLUMN     "chefDirection" JSONB NOT NULL,
ADD COLUMN     "ministereId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ModePayment" DROP COLUMN "direction_id",
ADD COLUMN     "directionId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Need" DROP COLUMN "direction_id",
DROP COLUMN "service_id",
DROP COLUMN "user_id",
ADD COLUMN     "directionId" INTEGER NOT NULL,
ADD COLUMN     "serviceId" INTEGER NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Payment" DROP COLUMN "direction_id",
DROP COLUMN "modePayment_id",
DROP COLUMN "response_id",
DROP COLUMN "user_id",
ADD COLUMN     "directionId" INTEGER NOT NULL,
ADD COLUMN     "modePaymentId" INTEGER NOT NULL,
ADD COLUMN     "responseId" INTEGER NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "direction_id",
ADD COLUMN     "directionId" INTEGER,
ADD COLUMN     "serviceId" INTEGER;

-- AlterTable
ALTER TABLE "Response" DROP COLUMN "direction_id",
DROP COLUMN "need_id",
DROP COLUMN "user_id",
ADD COLUMN     "directionId" INTEGER NOT NULL,
ADD COLUMN     "needId" INTEGER NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Service" DROP COLUMN "chef_service",
DROP COLUMN "direction_id",
ADD COLUMN     "chefService" JSONB NOT NULL,
ADD COLUMN     "directionId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "level" INTEGER,
ADD COLUMN     "ministereId" INTEGER;

-- CreateTable
CREATE TABLE "Ministere" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ministere_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_ministereId_fkey" FOREIGN KEY ("ministereId") REFERENCES "Ministere"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_directionId_fkey" FOREIGN KEY ("directionId") REFERENCES "Direction"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Direction" ADD CONSTRAINT "Direction_ministereId_fkey" FOREIGN KEY ("ministereId") REFERENCES "Ministere"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_directionId_fkey" FOREIGN KEY ("directionId") REFERENCES "Direction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_directionId_fkey" FOREIGN KEY ("directionId") REFERENCES "Direction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Need" ADD CONSTRAINT "Need_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Need" ADD CONSTRAINT "Need_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Need" ADD CONSTRAINT "Need_directionId_fkey" FOREIGN KEY ("directionId") REFERENCES "Direction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Response" ADD CONSTRAINT "Response_needId_fkey" FOREIGN KEY ("needId") REFERENCES "Need"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Response" ADD CONSTRAINT "Response_directionId_fkey" FOREIGN KEY ("directionId") REFERENCES "Direction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Response" ADD CONSTRAINT "Response_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_directionId_fkey" FOREIGN KEY ("directionId") REFERENCES "Direction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_modePaymentId_fkey" FOREIGN KEY ("modePaymentId") REFERENCES "ModePayment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_responseId_fkey" FOREIGN KEY ("responseId") REFERENCES "Response"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModePayment" ADD CONSTRAINT "ModePayment_directionId_fkey" FOREIGN KEY ("directionId") REFERENCES "Direction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
