import { useEffect, useRef } from 'react'
import './ReloadPrompt.css'

import { pwaInfo } from 'virtual:pwa-info'
import { useRegisterSW } from 'virtual:pwa-register/react'

console.log(pwaInfo)

function ReloadPrompt() {
  const dialogRef = useRef<HTMLDialogElement>()

  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegisteredSW(_, registration) {
      console.log('🚀 > onRegisteredSW > registration:', (registration as any).periodicSync)
      console.log("SW Registered: " + registration);
      registration?.addEventListener("sync", event => {
        console.log('🚀 > onRegisteredSW > event:', event)
      })
    },

    onRegisterError(error) {
      console.log("SW registration error", error);
    },
  });

  const close = () => {
    setOfflineReady(false);
    setNeedRefresh(false);
  };

  useEffect(() => {
    offlineReady &&
      alert("App is ready to work offline");
  }, [offlineReady]);

  useEffect(() => {
    if (needRefresh) {
      dialogRef.current?.showModal()
    }
  }, [needRefresh])

  return (
    <dialog
      open={needRefresh}
      title="Install update"
      onClose={close}
      className='modal'
    >
      <div className='modal-box'>
        <p>A new app update is available.</p>

        <p>
          <strong>Reload</strong> will refresh the app. You may lose the
          progress, if any.
        </p>
        <p>
          <strong>Cancel</strong> will install the update next time you visit
          the app.
        </p>

        <div className='modal-action'>
          <button onClick={close}>
            Cancel
          </button>
          <button onClick={() => updateServiceWorker(true)}>Reload</button>
        </div>
      </div>
    </dialog>
  )
}

export default ReloadPrompt