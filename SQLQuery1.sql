select count(product.productID), subcategory.Name from Production.Product as product
join Production.ProductSubcategory as subcategory on product.ProductSubcategoryID = subcategory.ProductSubcategoryID
where product.ProductSubcategoryID = 1

select count(subcategory.productSubcategoryID ), category.Name, category.ProductCategoryID from Production.ProductCategory as category
join Production.ProductSubcategory as subcategory on category.ProductCategoryID = subcategory.ProductCategoryID
group by category.Name, category.ProductCategoryID

select count(product.productID), subcategory.Name from Production.Product as product
join Production.ProductSubcategory as subcategory on product.ProductSubcategoryID = subcategory.ProductSubcategoryID
join Production.ProductCategory as category on category.ProductCategoryID = subcategory.ProductCategoryID
where category.ProductCategoryID = 3
group by subcategory.Name 


SELECT [category].[ProductCategoryID] AS [cid], 
[category].[ModifiedDate], [category].[Name] AS [cname], 
[category].[rowguid], 
[subcategory].[ProductSubcategoryID], 
[subcategory].[ModifiedDate], 
[subcategory].[Name], 
[subcategory].[ProductCategoryID], 
[subcategory].[rowguid]
FROM [Production].[ProductCategory] AS [category]
LEFT JOIN [Production].[ProductSubcategory] AS [subcategory] ON [category].[ProductCategoryID] = [subcategory].[ProductCategoryID]
ORDER BY [cid]

select * from Production.ProductSubcategory

select * from Production.Product
