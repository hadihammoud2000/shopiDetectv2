import "./App.css";



export default function AboutShopi() {
    return (
<div  className='aboutText'> 
    <h1>Welcome to ShopiDetect!</h1>
    <div className="aboutTextDetails">
    ShopiDetect is a tool to help detect whether a website is safe or phishy. It is a personal project of mine.
    It is mostly targeted towards e-commerce websites. <br></br> <br></br> All you have to do is 
    input the URL of the item(preferrably) or e-shop that you plan on buying from.
    Behind the scenes, a machine learning model, trained using multiple <b>features (check the graph on the right)
    </b>, analyzes your target URL and gives you a yes/no output. Simple as that! 

     <br></br> <br></br>
     the model is trained using a dataset which contains 991,638 safe websites and 56,937 fishy websites.<br></br> <u>Support for reinforcement learning is now live! Tell us whether we were right or wrong, ShopiDetect is ready to learn!</u>


    <h4>Test Accuracy Results: </h4>    
    <h5>Logistic Regression Classification: <span style={{color: "#FF0000", fontWeight:"bold", fontSize: "25px"}}>0.96103</span> </h5>
    <h5><mark>Support Vector Machines Classification: <span style={{color: "#FF0000", fontWeight:"bold", fontSize: "25px"}}>0.98270</span></mark></h5>
    <h5>Gaussian Naive Bayes Classification: <span style={{color: "#FF0000", fontWeight:"bold", fontSize: "25px"}}>0.93073</span> </h5>
    You could find the sample dataset used <a href="https://raw.githubusercontent.com/hadihammoud2000/shopiDetectv2/master/shopiServer/shopiServerApp/ml/URLDataset.csv" target="_blank">here</a><br></br><br></br>
     <span style={{color: "#FF0000"}}><i>Please Keep in mind: the results are based on a machine learning model, which means that they are a prediction
     and may not be a 100% accurate.</i> </span> 
    </div>

</div>
    );

}