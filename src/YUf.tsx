import React from 'react'

function YUf() {
    return (
        <div>
            hello
        </div>
    )
}

export default YUf

// export const UserMoney = () => {
//     const wallets = [
//       { title: 'bitcoin', amount: 1 },
//       { title: '$', amount: 100 }
//     ]
  
//     return <div>
//       <UserWallet wallet={wallets[0]} />
//       <UserWallet wallet={wallets[1]} />
//     </div>
//   }
  

// import ReactDOM from 'react-dom'

// export const YoutubeVideo = () => {
//     return <div>
//         <VideoHeader />
//         <VideoContent />
//         <VideoStatistics />
//     </div>
// }
// export const VideoHeader = () => {
//     return <div>
//         ?? Заголовок видео
//     </div>
// }
// export const VideoContent = () => {
//     return <div>
//         ?? Контент видео
//     </div>
// }
// export const VideoStatistics = () => {
//     return <div>
//         ?? Статистика лайков
//     </div>
// }

// ReactDOM.render(<div><YoutubeVideo /></div>,
//     document.getElementById('root')
// );

// //Что нужно написать вместо ххх, чтобы на экране увидеть:
// //?? Заголовок видео
// //?? Контент видео
// //?? Статистика лайков



//   return <user city="minsk" />
// }
// type PropsType = {
//   city: string
// }
// export const user: React.FC<PropsType> = (props) => {
//   return <div>hello {props.city}</div>
// }


// 8
// import ReactDOM from 'react-dom'

// export const VideoHeader = (props: {videoName: string}) => {
//     return <div>
//         ?? {props.videoName}
//     </div>
// }
// export const VideoContent = (props: {videoContent: string}) => {
//     return <div>
//         ?? <a href={props.videoContent}>{props.videoContent}</a>
//     </div>
// }
// export const VideoDescription = (props: {videoDescription: string}) => {
//     return <div>
//         ?? {props.videoDescription}
//     </div>
// }

// export const YoutubeVideo = (props: any) => {
//     return <div>
//         <VideoHeader xxx />
//         <VideoContent yyy />
//         <VideoDescription zzz />
//     </div>
// }

// export const App = () => {
//     const video = {
//         title: 'Samurai way',
//         link: 'https://www.youtube.com/watch?v=gb7gMluAeao&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8',
//         description: 'Best free react-course'
//     }

//     return <YoutubeVideo video={video} />
// }

// ReactDOM.render(<App />,
//     document.getElementById('root')
// );

// 9
// import ReactDOM from 'react-dom'

// const CrazyButton = (props: any) => {

//     const style = {
//         color: props.fontColor,
//         backgroundColor: props.bgColor  
//     }

//     return <button style={style}>
//         {props.title}
//     </button>
// }

// export const App = () => {
//     return <div>
//         <CrazyButton title={'delete'} fontColor={'white'} bgColor={'red'}/>
//         <CrazyButton title={'add'} fontColor={'white'} bgColor={'green'}/>
//     </div>
// }

// ReactDOM.render(<App/>,
//     document.getElementById('root')
// )


// 10
import ReactDOM from 'react-dom'

const Son = (props: any) => {
    return <div>
        I am son. My name is {props.name}
    </div>
}


const Father = (props: any) => {
    return <div>
        I am father. My name is {props.name}
        <Son name={props.sonName} />
    </div>
}

const Granny = (props: any) => {
    return <div>
        I am granny. My name is {props.name}
        <Father name={props.fatherName} sonName={props.sonName} />
    </div>
}

export const App = () => {
    return <div>
        <Granny name={'Бабуля'} fatherName={'Батя'} sonName={'Сын'}/>
    </div>
}   

ReactDOM.render(<App/>,
    document.getElementById('root')
)










