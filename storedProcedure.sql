USE AdventureWorks2017;  
GO  
CREATE PROCEDURE GetSubcategoriesByCategoryId  
    @CategoryId nvarchar(3)  
AS   
select count(product.productID), subcategory.Name from Production.Product as product
join Production.ProductSubcategory as subcategory on product.ProductSubcategoryID = subcategory.ProductSubcategoryID
join Production.ProductCategory as category on category.ProductCategoryID = subcategory.ProductCategoryID
where category.ProductCategoryID = @CategoryId
group by subcategory.Name 
GO  



EXECUTE GetSubcategoriesByCategoryId  @CategoryId=1;  

