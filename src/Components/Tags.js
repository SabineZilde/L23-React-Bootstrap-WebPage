import { useState } from 'react';

function Tags() {
    const [inputName, setInputName] = useState('');
    const [outputName, setOutputName] = useState('');

    const tagsCloud = ['Meeeeouw', 'cough', 'furball', 'into', 'food', 'bowl', 'then', 'scratch', 'owner', 'for', 'a', 'new', 'one', 'experiences', 'short', 'bursts', 'of', 'poo-phoria', 'after', 'going', 'to', 'the', 'loo', 'scratch', 'my', 'tummy', 'actually', 'i', 'hate', 'you', 'now', 'fight', 'me', 'so', 'freak', 'human', 'out', 'make', 'funny', 'noise', 'mow', 'mow', 'mow', 'mow', 'mow', 'mow', 'success', 'now', 'attack', 'human', 'yet', 'drink', 'from', 'the', 'toilet', 'but', 'sitting', 'in', 'a', 'box.', 'Show', 'belly.', 'Spit', 'up', 'on', 'light', 'gray', 'carpet', 'instead', 'of', 'adjacent', 'linoleum', 'good', 'now', 'the', 'other', 'hand,', 'too', 'check', 'cat', 'door', 'for', 'ambush', '10', 'times', 'before', 'coming', 'in'];

    const tagsBadges = tagsCloud.map((tag, index) => {
        const arrayForMoreTags = inputName.split(' ');
        return arrayForMoreTags.indexOf(tag) !== -1 ? <span>&nbsp;<span key={index} className="badge bg-primary">{tag}</span></span> : <span>&nbsp;<span key={index} className="badge bg-secondary">{tag}</span></span>;
    })

    const inputArray = [];

    const settingInput = (e) => {
        inputArray.push(e.target.value);
        const splittedInputArray = e.target.value.split(' ').join(', ');
        // alternative
        // const splittedInputArray = e.target.value.replace(/ /g, ', ;))
        setOutputName(splittedInputArray);
        return setInputName(e.target.value);
    }

    return (
        <div>
            <div className="row">
                <div className="col mt-3">
                    <h2>Looking for tags: {outputName}</h2>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <input type="text" className="form-control" onChange={settingInput}/>
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