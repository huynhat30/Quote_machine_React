const App = () => {
    const [getQuotes, setQuotes] = React.useState([]); //"get/set array of quotes" variable
    const [getRandomQuote, setRandomQuote] = React.useState('');//"get/set a random quote from array" variable
    const [getColor, setColor] = React.useState('#111');

    React.useEffect(() => {
        async function fetchData(){
           const response = await fetch("https://type.fit/api/quotes"); //fetch data from link
           const arryQuotes = await response.json();

           setQuotes(arryQuotes); //set array of quotes to function
           let randomIndex = Math.floor(Math.random() * arryQuotes.length); //get a random index from array of quotes
           setRandomQuote(arryQuotes[randomIndex]); //set a quote from random index for ready
        }
        fetchData();
    }, [])
        
        const getNewQuote = () => {
            const colors = [
                '#16a085',
                '#27ae60',
                '#2c3e50',
                '#f39c12',
                '#e74c3c',
                '#9b59b6',
                '#FB6964',
                '#342224',
                '#472E32',
                '#BDBB99',
                '#77B1A9',
                '#73A857'
              ];


            let randomIndex = Math.floor(Math.random() * getQuotes.length);
            let randomIndexColor = Math.floor(Math.random() * colors.length);
           setRandomQuote(getQuotes[randomIndex]);
           setColor(colors[randomIndexColor]);
        }

        return(
        <div style={{backgroundColor: getColor, minHeight: "100vh"}}>
        <div id="container" className="text-center">
            <div id="quote-box" className="jumbotron">
                    <div id="quote-wapper">
                        <p id="text" style={{color: getColor}}>&quot;{getRandomQuote.text}&quot;</p>
                        <h5 id="author">-- {getRandomQuote.author || "no author"} --</h5>
                    </div>

                    <div id="button-wrapper">
                        <button onClick={getNewQuote} className="btn btn-warning">New Quote</button><br/><br/>
                        <a href={
                            "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
                            encodeURIComponent('"' + getRandomQuote.text + '" ' + getRandomQuote.author)
                        } 
                        target = "_blank" className="btn btn-primary"><i class="fa fa-twitter"></i></a>
                    </div><br/>
                    <div class="footer">By <a href="https://github.com/huynhat30">Huy Giang <i class="fa fa-github"></i></a></div>
            </div>
            
        </div>
        </div>
    )
}


ReactDOM.render(React.createElement(App, null), document.getElementById('app'))
