interface EventLineProps {
    lineColor: string,
    
}

const EventLine = ({ lineColor: lineColor }: EventLineProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={265}
        height={25}
       
        
    >
        <path
            fill={lineColor}
            d="M263.34 7.96c-6.61 3.18-11.91-1.74-17.91-6.36-4.1-3.17-8.21.89-11.98 3.97-12.98 10.62-24.03-7.48-36.86-3.57-5.94 1.81-11.4 6.28-17.1 9.93-8.79 5.64-14.86 1.59-22.49-6.81-3.72-4.1-8.77-3.53-12.62-.94-7.68 5.13-14.62 11.5-22.87 11.73-10.92.29-19.63-16.67-30.9-9.36-6.22 4.03-11.9 10.83-18.31 13.64-7.84 3.42-11.52-8.95-17.49-14.86-3.1-3.07-6.2-2.14-9.45.02-8.02 5.31-14.59 14.86-23.25 7.81C17.37 9.28 13.98 2.37 8.59 2.3c-2.03-.03-6.49 7.72-7.44 6.03-.48-.83-1.42 1-1.08 2.01.08.46.17.91.25 1.37 0 .41.14.8.36.78.65-.06 1.14.09 1.69-.51 4.65-5.18 8.16-4.27 12.24.49 4.48 5.24 8.24 9.48 13.51 9.87 4.64.36 9.37-5.98 13.47-9.58 3.65-3.2 7.71-6.57 11.56-3.08 2.41 2.19 4.45 7.26 6.8 10 10.62 12.35 20.01-1.96 30.29-8.35 11.69-7.25 22.51 13.11 34.41 10.4 5.28-1.2 10.24-5.03 15.2-8.74 5.14-3.84 9.44-5.57 14.87-1.92 3.23 2.18 6.16 6.69 9.47 9.02 11.41 8.05 23.95-12.37 35.4-12.48 11.18-.1 20.59 12.84 31.86 4.47 3.91-2.91 7.5-7.6 12.01-5.36 2.35 1.16 4.53 3.92 6.85 5.37 4.31 2.69 8.44 3.15 12.69.15.87-.61 1.89-5.03.34-4.29v.01Z"
        />
    </svg>
)
export default EventLine