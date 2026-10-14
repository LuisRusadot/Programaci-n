import { useState } from 'react'

export function TwitterCard({ userName, userHandle, initialIsFollowing }) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const handleClick = () => setIsFollowing(!isFollowing)

    return (
        <div className="tw-followCard">
            <div className="tw-followCard-header">
                <img
                    className="tw-followCard-avatar"
                    src={`https://unavatar.io/github/${userHandle}`}
                    alt="Avatar"
                />
                <div className="tw-followCard-info">
                    <span className="tw-followCard-infoUserName">{userName}</span>
                    <span className="tw-followCard-infoUserHandle">@{userHandle}</span>
                </div>
            </div>
            <IsFollowingButton isFollowing={isFollowing} onClick={handleClick} />
        </div>
    )
}

export function IsFollowingButton({ isFollowing, onClick }) {
    return (
        <button
            className={`tw-followCard-button ${isFollowing ? 'is-following' : ''}`}
            onClick={onClick}
        >
            <span className="tw-followCard-text">{isFollowing ? 'Following' : 'Follow'}</span>
            {isFollowing && <span className="tw-followCard-stopFollow">Unfollow</span>}
        </button>
    )
}