import { TwitterCard } from "./TwitterCard.jsx"
import './App.css'

export function App() {
    return (
        <div className="App">
            <TwitterCard
                userName="Miguel Ángel Durán"
                userHandle="midudev"
                initialIsFollowing={false}
            />
        </div>
    )
}