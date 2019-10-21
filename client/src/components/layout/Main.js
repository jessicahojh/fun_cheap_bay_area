import React, { Component } from "react";

class Main extends Component {
    constructor() {
        super()
        this.state = {
            searchBar: "",
            results: "",
            // allFreeEvents: null,
            test: null
        }

        // this.handleChange = this.handleChange.bind(this)
    }

    // componentDidMount() {
    //     const API_KEY = process.env.REACT_APP_EVENTBRITE_API_TOKEN;
    //     // fetch(`https://cors-anywhere.herokuapp.com/https://www.eventbriteapi.com/v3/events/search?location.address=sanfrancisco&location.within=120km&expand=venue&token=${API_KEY}`)
    //     // fetch("https://cors-anywhere.herokuapp.com/https://www.eventbriteapi.com/v3/events/search?location.address=sanfrancisco&location.within=120km&expand=venue&token=")       
    //         .then(response => response.json())
    //         .then(data => {
    //             this.setState({
    //                 allFreeEvents: data
    //             })
    //         })
    // }
    componentDidMount() {
        const API_KEY = process.env.REACT_APP_EVENTBRITE_API_TOKEN;
        fetch(`https://app.ticketmaster.com/discovery/v1/events.json?apikey=${API_KEY}`) 
            .then(response => response.json())
            .then(data => {
                this.setState({
                    test: data
                })
            })

    }

    // searchData(searchKeyWords) {
    //     fetch("" + this.state.results)
    //         .then(response => response.json())
    //         .then(data => {
    //             this.setState({
    //                 allFreeEvents: data
    //             })
    //         })
    // }


    // handleChange(event) {
    //     const { name, value } = event.target
    //     this.setState({ [name]: value });
    // }


    // navigationDetail(data) {
    //     this.props.history.push("/detail/" + data.id, { response: data });

    // }

//     render() {
//         const allResponse = this.state.allFreeEvents == null ? "loading..." : this.state.allFreeEvents.events;
//         console.log("This is the state" + this.state.allFreeEvents);

//         if (allResponse === "loading...") {
//             return (
//                 <div>
//                     <div className="all-free-events">
//                         <h2> loading...</h2>
//                     </div>
//                 </div>
//             )

//         } else {

//             const eventsArray = allResponse;
//             console.log("This is events" + eventsArray);
//             let data = [];
//             for (let i = 0; i < eventsArray.length; i++) {
//                 data.push(<li><h2><span onClick={() => eventsArray[i].name.text}>{eventsArray[i].name.text}</span></h2></li>)
//             }

//             return (
//                 <div className="event-card" >
//                     {/* <input
//                         type="text"
//                         name="results"
//                         placeholder="Search Here"
//                         value={this.state.results}
//                         onChange={this.handleChange}
//                     /> */}
//                     {/* <button onClick={this.searchData.bind(this)}>Search!</button> */}

//                     <div className="all-free-events">
//                         <h2>List of all Bay Area free events here</h2>
//                         <ul>{data}</ul>
//                         <div>
//                             {/* {this.state.detail} */}
//                         </div>
//                         {/* <div>{this.state.allFreeEvents.events[0].name.text}</div> */}
//                     </div>

//                 </div>
//             );
//         }
//     }
// }


// export default Main

render() {
    const allResponse = this.state.test == null ? "loading..." : this.state.test._embedded.events;
    console.log("This is the state" + this.state.test);

    if (allResponse === "loading...") {
        return (
            <div>
                <div className="all-free-events">
                    <h2> loading...</h2>
                </div>
            </div>
        )

    } else {

        const eventsArray = allResponse;
        console.log("This is events" + eventsArray);
        let data = [];
        for (let i = 0; i < eventsArray.length; i++) {
            data.push(<li><h2><span onClick={() => eventsArray[i].name}>{eventsArray[i].name}</span></h2></li>)
        }

        return (
            <div className="event-card" >
                {/* <input
                    type="text"
                    name="results"
                    placeholder="Search Here"
                    value={this.state.results}
                    onChange={this.handleChange}
                /> */}
                {/* <button onClick={this.searchData.bind(this)}>Search!</button> */}

                <div className="all-free-events">
                    <h2>List of all Bay Area free events here</h2>
                    <ul>{data}</ul>
                    <div>
                        {/* {this.state.detail} */}
                    </div>
                    {/* <div>{this.state.allFreeEvents.events[0].name.text}</div> */}
                </div>

            </div>
        );
    }
}
}


export default Main
