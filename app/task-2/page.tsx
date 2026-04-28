export default function Dashboard(){
  const cards = [
    {icon:'/palette.svg', title:'Adobe Photoshop', tag:'Design', time:'in 3 days', size:'wide', bg:'bg-sky-100'},
    {icon:'/terminal-2.svg', title:'DALL·E 2, Midjourney, Stable Diffusion', tag:'AI', time:'in 5 days', size:'wide', bg:'bg-green-100'},
    {icon:'/palette.svg', title:'Figma', tag:'Design', time:'8 hours ago', size:'small', bg:'bg-violet-100'},
    {icon:'/code.svg', title:'Python', tag:'Coding', time:'2 days ago', size:'small', bg:'bg-orange-100'},
    {icon:'/palette.svg', title:'Sketch', tag:'Design', time:'4 days ago', size:'small', bg:'bg-pink-100'},
  ];

  const AvatarGroup = () => (
    <div className='flex -space-x-2'>
      {['/img 1.jpg','/img 2.jpg','/img 3.jpg'].map((img,i) => (
        <img
          key={i}
          src={img}
          alt='user'
          className='w-8 h-8 rounded-full border-2 border-white object-cover'
        />
      ))}
      <div className='w-8 h-8 rounded-full border-2 border-white bg-white text-xs flex items-center justify-center text-gray-500'>3+</div>
    </div>
  );

  return (
    <div className='min-h-screen bg-zinc-100 p-10 font-sans text-slate-700'>
      <div className='max-w-5xl mx-auto'>
        <div className='mb-10 text-3xl font-bold tracking-tight'>𖾕𖾝꙼ᩚ𛲕𖾟</div>
        <div className='grid grid-cols-6 gap-6'>
          {cards.map((card,idx)=> (
            <div key={idx} className={`${card.bg} rounded-3xl p-6 shadow-sm ${card.size==='wide'?'col-span-3 h-64':'col-span-2 h-56'} flex flex-col justify-between`}>
              <div>
                <div className='flex items-center gap-2 text-sm font-medium opacity-70 mb-11'><img src={card.icon} alt={card.title} className='w-5 h-5' />
                <span>{card.tag}</span>
                </div>
                <h2 className={`font-semibold leading-tight ${card.size==='wide'?'text-4xl':'text-3xl'}`}>{card.title}</h2>
                <p className='mt-3 text-sm opacity-70'>{card.time}</p>
              </div>
              {card.size === 'wide' && (
              <div className='flex justify-end'>
                <AvatarGroup />
              </div>
              )}
            </div>
          ))}
        </div>
        <div className='text-right mt-10 text-2xl text-gray-400 font-medium'>Day 020 / 365</div>
      </div>
    </div>
  )
}
