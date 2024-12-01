-- AlterTable
ALTER TABLE "patients" ALTER COLUMN "first_name" DROP NOT NULL,
ALTER COLUMN "last_name" DROP NOT NULL,
ALTER COLUMN "date_of_birth" DROP NOT NULL,
ALTER COLUMN "password" DROP NOT NULL;
