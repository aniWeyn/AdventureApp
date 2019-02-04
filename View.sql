CREATE VIEW View_ProductCategoriesSubcategories AS 
        select count(subcategory.productSubcategoryID ) as 'countedSubcategories', category.Name, category.ProductCategoryID from Production.ProductCategory as category
join Production.ProductSubcategory as subcategory on category.ProductCategoryID = subcategory.ProductCategoryID
group by category.Name, category.ProductCategoryID