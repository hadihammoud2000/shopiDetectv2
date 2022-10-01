# ShopiDetect

### [visit here](https://shopidetectui.netlify.app)

![snapshot](https://res.cloudinary.com/inoroutapp/image/upload/v1664642530/Screen_Shot_2022-10-01_at_7.41.55_PM_da1jk0.png)


ShopiDetect is a tool to help detect whether a website is safe or phishy. It is a personal project. It is mostly targeted towards e-commerce websites.

All you have to do is input the URL of the item(preferrably) or e-shop that you plan on buying from. Behind the scenes, a machine learning model, trained using multiple features, analyzes your target URL and gives you a yes/no output.

the model is trained using a dataset which contains 991,638 safe websites and 56,937 fishy websites.


Test Accuracy Results:

Logistic Regression Classification: 0.96103

**Support Vector Machines Classification: 0.98270**

Gaussian Naive Bayes Classification: 0.93073

***
Correct the algorithm by clicking on "WAS SHOPI MISTAKEN" in the top right screen

***

Frontend: React.js with Cytoscape.js example graphs, hosted on Netlify

Backend: FastAPI hosted on Heroku

Database (result storage): postgresSQL 

