type TExerise = {
  name: string;
  view: string;
}
const ExerciseItem = ({name,view}:TExerise) => {
  return (
    <div className="item flex-1">
      <div>
        <div className="photo w-full h-[160px] bg-slate-200"></div>
        <div className="text-left">
          <h3><b>{name}</b></h3>
          <div className="text-orange-500">{view}</div>
        </div>
        </div>
    </div>
  )
}
const Exercise = () => {
  return (
    <div className="flex">
      <ExerciseItem name="Ấn tượng đầu tiên SamSum Galaxy A32 4G: Với hơn 6 triệu đã có màn hình Super AMOLED 90Hz" view="140 lượt xem"/>
      <ExerciseItem name="Google Pixel 5a dự kiến sẽ được ra mắt cùng thời với Android 12" view="127 lượt xem"/>
      <ExerciseItem name="Galaxy A52 4G lộ diện trên google Play Console Xác nhận dùng chip Snapdragon 720" view="55 lượt xem"/>
      <ExerciseItem name="Galaxy A82 5g chuẩn bị ra mắt với chip flagship và màn hình trượt độc đáo, Samfans gom lúa đi là vừa" view="55 lượt xem"/>
    </div>
  )
}

export default Exercise;
