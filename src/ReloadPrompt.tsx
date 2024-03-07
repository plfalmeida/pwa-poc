import { useEffect } from 'react'
import './ReloadPrompt.css'

import { pwaInfo } from 'virtual:pwa-info'
import { useRegisterSW } from 'virtual:pwa-register/react'

console.log(pwaInfo)

function ReloadPrompt() {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      // eslint-disable-next-line prefer-template
      console.log("SW Registered: " + r);
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
      alert({
        title: "Ready",
        message: "App is ready to work offline",
        color: "blue",
      });
  }, [offlineReady]);

  return (
    <dialog
    open={needRefresh}
    title="Install update"
    onClose={close}
  >
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
  </dialog>
  )
}

export default ReloadPrompt