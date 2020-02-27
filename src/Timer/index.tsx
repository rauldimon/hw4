import React from 'react';

interface State {
  time: number,
  start: number,
}

export default class Timer extends React.Component<{}, State>  {
  timer: any

    constructor(props: never) {
        super(props);
        this.state = {
            time: 0,
            start: Date.now()
        }
        console.log("constructor")
    }

    componentDidMount() { 
        console.log("Запуск метода монтирования")
        this.timer = setInterval(() => this.setState({
            time: Date.now() - this.state.start
        }), 1000);
    }

    
    shouldComponentUpdate(props:{}, nextState: State) {
        console.log("Метод shouldComponentUpdat вызывается перед рендером")
        return nextState !== this.state;
    }
        
    
    componentDidUpdate(props:{}, prevState: State) {
        console.log("Метод componentDidUpdate вызывается при обновлении")
    }
      
    componentWillUnmount() {
        console.log("Запуск метода размонтирования(очистка)")
        clearInterval(this.timer);
    }

    getTime() {
        const startTime = new Date(this.state.time)
        const date = startTime
        date.setHours(date.getHours() - 3)
        return date.toLocaleTimeString()
    }

    render() {
        console.log("render")
        return (
            <div>
                <h3> Cold time</h3>
                <p>{this.getTime()}</p>
            </div>
        )    
    }
}



// eslint-disable-next-line no-empty-pattern
// const Timer = ({}, state: State) => {
//     const [time, setTime] = React.useState(0)
//     const [start] = React.useState(Date.now())

//     React.useEffect(() => {
//         console.log("Монтирование компонента")
//         const timer = setInterval(() => setTime(
//             Date.now() - start
//         ), 1000);
//         return () => {
//             clearInterval(timer)
//             console.log("Размонтирование компонента(очистка)")
//         }
//     }, [start])

//     React.useEffect(() => {
//         console.log("Обновление компонента")
//     }, [time])

//     const getTime = () => {
//         const startTime = new Date(time)
//         const date = startTime
//         date.setHours(date.getHours() - 3)
//         return date.toLocaleTimeString()
//     }

//     return (
//         <div>
//             <h3> Cold time</h3>
//             <p>{getTime()}</p>
//         </div>
//     )
// }
// export default React.memo(Timer)