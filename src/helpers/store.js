import create from 'zustand'
import { shallow } from 'zustand/shallow'

const useStore = create((set) => ({
  pan: true,
  togglePan: () => set((state) => ({ pan: !state.pan })),
  dom: null,
  setDom: (dom) => set((state) => ({ dom })),
  entity: null,
  setEntity: (entity) => set((state) => ({ entity })),
}))

// const useStoreImpl = create((set) => {
//   return {
//     router: null,
//     dom: null,
//   }
// })

// const useStore = (sel) => useStoreImpl(sel, shallow)
// Object.assign(useStore, useStoreImpl)

// const { getState, setState } = useStoreImpl

// export { getState, setState, usePanStore }
export default useStore
