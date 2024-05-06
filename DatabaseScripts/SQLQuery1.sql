create database ProductDb

create table Product(Id int IDENTITY(1,1), Name nvarchar(100), Price decimal(10,2), Quantity int, IsActive bit)

select * from Product