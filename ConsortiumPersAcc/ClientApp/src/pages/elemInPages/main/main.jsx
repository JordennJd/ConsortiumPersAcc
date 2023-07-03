import Laboratory from './laboratory/laboratory';
import style from './main.module.css';
import LeaderLine from "react-leader-line";
import React, { Component } from 'react';


export class Main extends Component {
    static displayName = Main.name;
    constructor(props) {
        super(props);
        this.state = { LaboratoryList: [], loading: true };
    }
    
    componentDidMount() {
        this.populateWeatherData();

    }

    static renderForecastsTable(LaboratoryList) {
        
        const mainStyle = {
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gridTemplateRows: 'repeat(' + LaboratoryList.length + ', 100px 1fr) 100px',
            alignItems: 'stretch',
            justifyItems: 'center',
        };
        console.log(LaboratoryList)
        const lineOptions = {
            endPlug: "behind",
            path: "straight",
            color: "rgba(255, 255, 255, 0.5)"
        };
        setTimeout(()=>{for (let i = 1; i < LaboratoryList.length; i++) {
            new LeaderLine(document.getElementsByClassName("ref" + i)[0],
                document.getElementsByClassName("ref" + (i + 1))[0], lineOptions)
        }},100)

        return (
            
            <main className={style.mainContent} style={mainStyle}>

            
                {LaboratoryList.map(laboratory =>
                    <Laboratory
                        id={laboratory.place}
                        ref={LaboratoryList.ref}
                        nameLaboratory={laboratory.name}
                        sponsors={laboratory?.sponsors}
                        // partners={LaboratoryList.partners}
                    />
                )}
            </main>
        )
    }

    render() {
        
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Main.renderForecastsTable(this.state.LaboratoryList);
        return (
            
            <div>
                
                <h1 id="tableLabel"></h1>
                {contents}
            </div>
        );
    }

    async populateWeatherData() {
        
        const response = await fetch('api/Laboratory/GetLabs');
        const data = await response.json();
        this.setState({ LaboratoryList: data, loading: false });
    }
}



