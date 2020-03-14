import { toast } from 'react-toastify'

const ToastMessage = (message) => (
  toast.error(message, {
    toastId: 'offlinePayment',
    hideProgressBar: true,
    autoClose: 3000,
    position: toast.POSITION.TOP_RIGHT
  })
)

export default ToastMessage
