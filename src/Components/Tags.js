import { useState } from 'react';

function Tags() {
    const [inputName, setInputName] = useState('')
    
    const tagsCloud = ['Meeeeouw', 'cough', 'furball', 'into', 'food', 'bowl', 'then', 'scratch', 'owner', 'for', 'a', 'new', 'one', 'experiences', 'short', 'bursts', 'of', 'poo-phoria', 'after', 'going', 'to', 'the', 'loo', 'scratch', 'my', 'tummy', 'actually', 'i', 'hate', 'you', 'now', 'fight', 'me', 'so', 'freak', 'human', 'out', 'make', 'funny', 'noise', 'mow', 'mow', 'mow', 'mow', 'mow', 'mow', 'success', 'now', 'attack', 'human', 'yet', 'drink', 'from', 'the', 'toilet', 'but', 'sitting', 'in', 'a', 'box.', 'Show', 'belly.', 'Spit', 'up', 'on', 'light', 'gray', 'carpet', 'instead', 'of', 'adjacent', 'linoleum', 'good', 'now', 'the', 'other', 'hand,', 'too', 'check', 'cat', 'door', 'for', 'ambush', '10', 'times', 'before', 'coming', 'in'];
    
    const tagsBadges = tagsCloud.map((tag) => {
        const arrayForMoreTags = inputName.split(' ');
        return arrayForMoreTags.indexOf(tag) !== -1 ? <span>&nbsp;<span className="badge bg-primary">{tag}</span></span> : <span>&nbsp;<span className="badge bg-secondary">{tag}</span></span>;
    })

    const showInput = (e) => {
        return setInputName(e.target.value);
    }

    return (
        <div>
            <div className="row">
                <div className="col mt-3">
                    <h2>Looking for tags: {inputName}</h2>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <input onChange={showInput} />
                </div>
            </div>
            <div className="row">
                <div className="col mt-3 text-center">
                    <p>{tagsBadges}</p>
                </div>
            </div>
        </div>
    )
}

export default Tags;