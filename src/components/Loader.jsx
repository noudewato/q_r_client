import Perfect from "../assets/perfect_touch.jpg"

export const Loader = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        minHeight: '80vh',
        flexDirection: 'column'
      }}
    >
      <img src={`${Perfect}`} width="50px" height="50px" alt="perfect_touch" />
      ...loading
    </div>
  )
}
