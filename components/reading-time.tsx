type Props = {
  timeToRead: number;
};

const formatText = (timeToRead: number): string =>
  `⏳ ${Math.ceil(timeToRead)} ${
    timeToRead === 1 ? 'minute' : 'minutes'
  } to read`;

const ReadingTime = ({ timeToRead }: Props) => (
  <span>{formatText(timeToRead)}</span>
);
export default ReadingTime;
