## TLDR

Exploring `Gradients` or `degradados` for meaning. [Demo](https://polmoneys.github.io/degradado/)

## How to

Spread to an element whatever you need from `useDegradado` or `useDegradadoRepeat` hook. 

```ts

const { styles, onClick } = useDegradado({
items: [
{ name: 'Progress', color: '#444', stop: ['0%', '15%'] },
{ name: 'To do', color: '#888', stop: ['15%', '100%'] },
],
direction: 'x',
onSelect: name => {
console.log(name)
},
})

// ...
<svg
aria-hidden="true"
viewBox={'0 0 100 36'}
width="100%"
height="2em"
style={{ ...styles, cursor: 'pointer' }}
{...(onClick !== undefined && { onClick })}
/>
<p>Progress 15%</p>


```

You do you but I like to wrap/abstract both 'parts' into it's own component as in `<ProgressBar/>` so you can consume it with less noise. 


## Custom gradient

Display percentages visually, progress, quantities...and with a dash of `CSS grid` we can do also `UI` elements.  


## Repeated gradient

Create steppers, or draw time-frames like D, W, Q ... 

```ts

const WORKING_HOURS = [
'9:00',
'10:00',
'11:00',
'12:00',
'13:00',
'14:00',
'15:00',
'16:00',
'17:00',
]

// ... 
const { styles, onClick} = useDegradadoRepeat({
colors: {
start: 'yellow',
end: '#555',
},
direction: 'y',
size: '12.5%',
minHeight: '380px',
onSelect: period => {
toast(`Selected ${WORKING_HOURS[period]}`, {
className: 'toast',
bodyClassName: 'toast-body',
position: 'top-right',
autoClose: 10000,
hideProgressBar: true,
closeOnClick: true,
pauseOnHover: true,
draggable: false,
})
},
})

// ...

 <div className="row gap">
{WORKING_HOURS.map((l, pos) => (
    <p key={`${l}-${pos}`}>{l}</p>
))}
</div>

<div style={{ ...styles, minWidth: '200px' }} onClick={onClick} />


```

## Roadmap

We can create `charts` or group `results` by a boolean with `degradados`, while in it's current state feels 'feature complete' I'll keep adding more 'advanced' usage of wrapping gradients with logic.


## More React

[Sparklines](https://github.com/polmoneys/Sparkline),[Waffle](https://github.com/polmoneys/Waffle),[Charts](https://github.com/polmoneys/charts) for visualizing data. 

[To my knowledge this is how to group elements into interfaces](https://github.com/polmoneys/tmk), tips on building [app](https://github.com/polmoneys/react-app) and how to [draaaag](https://github.com/polmoneys/draaaaaag)


## Inspiration 💐

> Our requirements are more modest but at the same time more responsible:
> buildings, furniture, drinking glasses may well be consumer items that
> we can destroy without regret after they have served for some short or
> long period, but while we use them we expect them to fullfill their role and serve us perfectly, so perfectly that we can also derive aesthetic
> enjoyment from observing them in use.

Erik Gunnar Asplund on **Swedish Grace**.


