export function DynamicComponent() {
    return (
        <div>
            <h1 className="text-sm">I am a Dynamic Component</h1>
            <p className='text-green-500 text-sm'>{import.meta.env.VITE_BUILD_DATE}</p>
        </div>
    )
}