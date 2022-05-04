import type { MenuItemDataInfo } from '~/types'

export const core: Record<string, MenuItemDataInfo[]> = {
  animation: [
    {
      name: 'useInterval',
      desc: '累计，间隔可配置',
      demo: false,
    },
    {
      name: 'useIntervalFn',
      desc: '累计函数',
      demo: false,
    },
    {
      name: 'useNow',
      desc: '实时时间',
      demo: false,
    },
    {
      name: 'useRafFn',
      desc: '每次 requestAnimationFrame 时执行函数，一般为每秒60次',
      demo: false,
    },
    {
      name: 'useTimeout',
      desc: '简单超时计时器',
      demo: false,
    },
    {
      name: 'useTimeoutFn',
      desc: '超时计时器函数',
      demo: false,
    },
    {
      name: 'useTimestamp',
      desc: '实时时间戳',
      demo: false,
    },
    {
      name: 'useTransition',
      desc: '响应式的剪切板，基于 Clipboard API',
      demo: false,
    },
    {
      name: 'useTransition',
      desc: '数值的运动曲线',
      demo: false,
    },
  ],
  browser: [
    {
      name: 'useBreakpoints',
      desc: '响应式获取窗口尺寸识别设备大小',
      demo: false,
    },
    {
      name: 'useBroadcastChannel',
      desc: '同源窗口间的通信，基于 BroadcastChannel API',
      demo: false,
    },
    {
      name: 'useBrowserLocation',
      desc: '页面地址信息，在安装有 VueRouter 时信息为useRoute()的返回值',
      demo: false,
    },
    {
      name: 'useClipboard',
      desc: '剪切板，基于 Clipboard API',
      demo: false,
    },
    {
      name: 'useColorMode',
      desc: '页面颜色模式',
      demo: false,
    },
    {
      name: 'useCssVar',
      desc: '操纵css变量',
      demo: false,
    },
    {
      name: 'useDark',
      desc: '检查是否为深色模式',
      demo: false,
    },
    {
      name: 'useEventListener',
      desc: '事件监听，依据组件的挂载与否自动添加移除',
      demo: false,
    },
    {
      name: 'useEyeDropper',
      desc: '颜色拾取器',
      demo: false,
    },
    {
      name: 'useFavicon',
      desc: '操纵网站图标',
      demo: false,
    },
    {
      name: 'useFileSystemAccess',
      desc: '本地文件的创建、读取、编辑等，基于 FileSystemAccessAPI',
      demo: false,
    },
    {
      name: 'useFullscreen',
      desc: '窗口全屏，进入、退出、切换、状态，基于 Fullscreen API',
      demo: false,
    },
    {
      name: 'useGamepad',
      desc: '游戏控制器（手柄），基于 Gamepad API',
      demo: false,
    },
    {
      name: 'useMediaControls',
      desc: '媒体控制，针对视频、音频，播放、暂停、时间、音量等',
      demo: false,
    },
    {
      name: 'useMediaQuery',
      desc: '媒体查询，对窗口尺寸的改变做出反应，基于 Media Query API',
      demo: false,
    },
    {
      name: 'useMemory',
      desc: '内存信息',
      demo: false,
    },
    {
      name: 'usePermission',
      desc: '页面权限，加速计、光传感器、剪切板、扬声器、麦克风、摄像头等，基于 Permissions API',
      demo: false,
    },
    {
      name: 'usePreferredColorScheme',
      desc: '获取颜色偏好，基于 prefers-color-scheme API',
      demo: false,
    },
    {
      name: 'usePreferredDark',
      desc: '是否颜色偏好为深色',
      demo: false,
    },
    {
      name: 'usePreferredLanguages',
      desc: '语言偏好，基于 Navigator Languages API',
      demo: false,
    },
    {
      name: 'useScreenSafeArea',
      desc: '屏幕安全区域，基于 env(safe-area-inset-*)',
      demo: false,
    },
    {
      name: 'useScriptTag',
      desc: '向页面注入 script 标签',
      demo: false,
    },
    {
      name: 'useShare',
      desc: '页面分享，基于 Web Share API',
      demo: false,
    },
    {
      name: 'useStyleTag',
      desc: '向页面注入 style 标签',
      demo: false,
    },
    {
      name: 'useTitle',
      desc: '操纵页面标题',
      demo: false,
    },
    {
      name: 'useUrlSearchParams',
      desc: '获取页面地址参数，会自动转为对象，基于  URLSearchParams API',
      demo: false,
    },
    {
      name: 'useVibrate',
      desc: '设控制备震动，基于 Vibration API',
      demo: false,
    },
    {
      name: 'useWakeLock',
      desc: '阻止设备休眠，基于 Screen Wake Lock API',
      demo: false,
    },
    {
      name: 'useWebNotification',
      desc: '桌面通知，基于 Notification API',
      demo: false,
    },
  ],
  component: [
    {
      name: 'computedInject',
      desc: 'computed 和 inject 的融合',
      demo: false,
    },
    {
      name: 'templateRef',
      desc: '无需return即可连接ref至元素（setup 语法糖自带）',
      demo: false,
    },
    {
      name: 'tryOnBeforeMount',
      desc: '尝试在 onBeforeMount 中执行，否则直接执行',
      demo: false,
    },
    {
      name: 'tryOnBeforeUnmount',
      desc: '尝试在 onBeforeUnmount 中执行，否则不执行',
      demo: false,
    },
    {
      name: 'tryOnMounted',
      desc: '尝试在 onMounted 中执行，否则直接执行',
      demo: false,
    },
    {
      name: 'tryOnScopeDispose',
      desc: '尝试在 onScopeDispose 中执行，否则不执行',
      demo: false,
    },
    {
      name: 'tryOnUnmounted',
      desc: '尝试在 onUnmounted 中执行，否则不执行',
      demo: false,
    },
    {
      name: 'unrefElement',
      desc: '解除ref 与 元素之间的连接',
      demo: false,
    },
    {
      name: 'useCurrentElement',
      desc: '获取当前组件挂载的元素信息',
      demo: false,
    },
    {
      name: 'useMounted',
      desc: '监测是否挂载的简写',
      demo: false,
    },
    {
      name: 'useTemplateRefsList',
      desc: '在v-for 情况下建立ref 连接的简写',
      demo: false,
    },
    {
      name: 'useVirtualList',
      desc: '虚拟列表',
      demo: false,
    },
    {
      name: 'useVModel',
      desc: '使用v-model 时，进行获取、修改的简写',
      demo: false,
    },
    {
      name: 'useVModels',
      desc: '使用v-model 时，进行获取、修改的简写，批量转换',
      demo: false,
    },
  ],
  elements: [
    {
      name: 'useActiveElement',
      desc: '获取激活的元素，基于 document.activeElement',
      demo: false,
    },
    {
      name: 'useDocumentVisibility',
      desc: '监听窗口隐藏（最小化），基于 document.visibilityState',
      demo: false,
    },
    {
      name: 'useDraggable',
      desc: '使得元素可拖拽',
      demo: false,
    },
    {
      name: 'useElementBounding',
      desc: '获取元素的大小及其相对于视口的位置，基于 bounding box API',
      demo: false,
    },
    {
      name: 'useElementSize',
      desc: '获取元素大小，基于 ResizeObserver API',
      demo: false,
    },
    {
      name: 'useElementVisibility',
      desc: '获取元素在窗口中的可见性',
      demo: false,
    },
    {
      name: 'useIntersectionObserver',
      desc: '获取目标元素的可见性',
      demo: false,
    },
    {
      name: 'useMouseInElement',
      desc: '获取元素相对目标元素的信息，是否元素内、较元素距离等',
      demo: false,
    },
    {
      name: 'useMutationObserver',
      desc: '监视对DOM树所做更改，基于 MutationObserver API',
      demo: false,
    },
    {
      name: 'useResizeObserver',
      desc: '监听元素大小更改',
      demo: false,
    },
    {
      name: 'useWindowFocus',
      desc: '或是窗口焦点状态，基于 window.onfocus and window.onblur API',
      demo: false,
    },
    {
      name: 'useWindowScroll',
      desc: '获取窗口滚动信息',
      demo: false,
    },
    {
      name: 'useWindowSize',
      desc: '获取窗口尺寸',
      demo: false,
    },
  ],
  misc: [
    {
      name: 'useTimeAgo',
      desc: '往日来时测算',
      demo: false,
    },
    {
      name: 'useWebWorker',
      desc: '利用worker 注册及通讯，基于 Web Workers API',
      demo: false,
    },
    {
      name: 'useWebWorkerFn',
      desc: '运行一个高负载函数却不阻塞界面，基于 Web Workers API',
      demo: false,
    },
  ],
  network: [
    {
      name: 'useEventSource',
      desc: '服务端向客户端的单向持续通信，基于 EventSource or Server-Sent-Events API',
      demo: false,
    },
    {
      name: 'useFetch',
      desc: '可中止、拦截、重新请求等，基于 Fetch API',
      demo: false,
    },
    {
      name: 'useWebSocket',
      desc: '自动启用、自动关闭、自动重连、心跳助手、子协议，基于 WebSocket API',
      demo: false,
    },
  ],
  sensors: [
    {
      name: 'onClickOutside',
      desc: '检测是否为目标元素界外点击',
      demo: false,
    },
    {
      name: 'onKeyStroke',
      desc: '监听键盘敲击',
      demo: false,
    },
    {
      name: 'onLongPress',
      desc: '检测是否在目标元素上长按，长按延迟可控',
      demo: false,
    },
    {
      name: 'onStartTyping',
      desc: '无焦点情况下输入时，目标元素获取焦点并传入输入值',
      demo: false,
    },
    {
      name: 'useBattery',
      desc: '电池状态，基于 Battery Status API',
      demo: false,
    },
    {
      name: 'useDeviceMotion',
      desc: '获取设备移动情况，基于 DeviceMotionEvent API',
      demo: false,
    },
    {
      name: 'useDeviceOrientation',
      desc: '设备方位，基于 DeviceOrientationEvent API',
      demo: false,
    },
    {
      name: 'useDevicePixelRatio',
      desc: '设备物理像素，基于 window.devicePixelRatio API',
      demo: false,
    },
    {
      name: 'useDevicesList',
      desc: '媒体输入和输出设备的列表，基于 enumerateDevices API',
      demo: false,
    },
    {
      name: 'useDisplayMedia',
      desc: '获取设备窗口投射显示，基于 mediaDevices.getDisplayMedia API',
      demo: false,
    },
    {
      name: 'useElementByPoint',
      desc: '获取鼠标指向（手指触摸）的元素',
      demo: false,
    },
    {
      name: 'useElementHover',
      desc: '检测目标元素是否被 hover',
      demo: false,
    },
    {
      name: 'useFocus',
      desc: '任意元素的焦点赋予、检测',
      demo: false,
    },
    {
      name: 'useFocusWithin',
      desc: '检测焦点是否在目标元素内部',
      demo: false,
    },
    {
      name: 'useFps',
      desc: '帧率',
      demo: false,
    },
    {
      name: 'useGeolocation',
      desc: '位置信息，基于 Geolocation API',
      demo: false,
    },
    {
      name: 'useIdle',
      desc: '检测鼠标是否离开页面，离开判定延迟可配置',
      demo: false,
    },
    {
      name: 'useInfiniteScroll',
      desc: '无限滚动',
      demo: false,
    },
    {
      name: 'useKeyModifier',
      desc: '检测按键修饰符，基于 Modifier State API',
      demo: false,
    },
    {
      name: 'useMagicKeys',
      desc: '获取按下的按键，支持至5按键同时按下',
      demo: false,
    },
    {
      name: 'useMouse',
      desc: '鼠标指针位置',
      demo: false,
    },
    {
      name: 'useMousePressed',
      desc: '检测鼠标是否按下，可设置检测区域',
      demo: false,
    },
    {
      name: 'useNavigatorLanguage',
      desc: '监听浏览器语言，基于 useNavigatorLanguage API',
      demo: false,
    },
    {
      name: 'useNetwork',
      desc: '网络情况，基于 Network status API',
      demo: false,
    },
    {
      name: 'useOnline',
      desc: '网络在线情况',
      demo: false,
    },
    {
      name: 'usePageLeave',
      desc: '检测鼠标是否离开页面',
      demo: false,
    },
    {
      name: 'useParallax',
      desc: '轻松创建视差效果',
      demo: false,
    },
    {
      name: 'usePointer',
      desc: '获取鼠标/触摸信息，基于  pointer state API',
      demo: false,
    },
    {
      name: 'usePointerSwipe',
      desc: '滑动检测，基于 PointerEvents API',
      demo: false,
    },
    {
      name: 'useScroll',
      desc: '获取滚动状态，方向、位置、是否在滚动、是否至边界',
      demo: false,
    },
    {
      name: 'useScrollLock',
      desc: '滚动锁定',
      demo: false,
    },
    {
      name: 'useSpeechRecognition',
      desc: '语音识别，基于 SpeechRecognition API',
      demo: false,
    },
    {
      name: 'useSpeechSynthesis',
      desc: '语音生成，基于 SpeechSynthesis API',
      demo: false,
    },
    {
      name: 'useSwipe',
      desc: '基于触摸的滑动检测，基于 TouchEvents API',
      demo: false,
    },
    {
      name: 'useTextSelection',
      desc: '获取选中文本，基于 Window.getSelection API',
      demo: false,
    },
    {
      name: 'useUserMedia',
      desc: '设备摄像头、麦克风使用、推流，基于 mediaDevices.getUserMedia API',
      demo: false,
    },
  ],
  state: [
    {
      name: 'createGlobalState',
      desc: '全局可复用状态',
      demo: false,
    },
    {
      name: 'createInjectionState',
      desc: '可注入组件的全局状态',
      demo: false,
    },
    {
      name: 'createSharedComposable',
      desc: '全局可复用函数，会从前一次被返回的结果继续',
      demo: false,
    },
    {
      name: 'useAsyncState',
      desc: '异步状态，',
      demo: false,
    },
    {
      name: 'useDebouncedRefHistory',
      desc: '带防抖的历史记录',
      demo: false,
    },
    {
      name: 'useLocalStorage',
      desc: '响应式 Window.localStorage',
      demo: false,
    },
    {
      name: 'useManualRefHistory',
      desc: '需手动创建记录的历史记录',
      demo: false,
    },
    {
      name: 'useRefHistory',
      desc: '历史记录',
      demo: false,
    },
    {
      name: 'useSessionStorage',
      desc: '响应式 Window.sessionStorage',
      demo: false,
    },
    {
      name: 'useStorage',
      desc: '响应式 Storage, 默认 local, 可选 session',
      demo: false,
    },
    {
      name: 'useStorageAsync',
      desc: '响应式 Storage, 支持异步',
      demo: false,
    },
    {
      name: 'useThrottledRefHistory',
      desc: '带节流的历史记录',
      demo: false,
    },
  ],
  utilities: [
    {
      name: 'computedAsync',
      desc: '异步 computed，可读取状态、可取消现有pending、可lazy、',
      demo: false,
    },
    {
      name: 'computedEager',
      desc: '推荐在简单计算（如获取布尔）时使用',
      demo: false,
    },
    {
      name: 'computedWithControl',
      desc: '显式的定义计算属性的依赖项',
      demo: false,
    },
    {
      name: 'createEventHook',
      desc: '创建事件钩子',
      demo: false,
    },
    {
      name: 'createUnrefFn',
      desc: '创建一个可解析（直接传入）ref 作为参数的函数',
      demo: false,
    },
    {
      name: 'extendRef',
      desc: '为ref 扩展属性',
      demo: false,
    },
    {
      name: 'get',
      desc: '获取ref.value 的简写',
      demo: false,
    },
    {
      name: 'isDefined',
      desc: 'ref 不为空（null, undefined）检测',
      demo: false,
    },
    {
      name: 'logicAnd',
      desc: '多个 ref 间的逻辑与运算',
      demo: false,
    },
    {
      name: 'logicNot',
      desc: 'ref 的 NOT 运算',
      demo: false,
    },
    {
      name: 'logicOr',
      desc: '多个 ref 间的逻辑或运算',
      demo: false,
    },
    {
      name: 'makeDestructurable',
      desc: '使即可解构至对象也可结构至数组',
      demo: false,
    },
    {
      name: 'reactify',
      desc: '将一个普通函数转换为可接收ref参数的函数，且返回值是响应的',
      demo: false,
    },
    {
      name: 'reactifyObject',
      desc: '将一个对象进行转换，使得其方法可接收ref 参数',
      demo: false,
    },
    {
      name: 'reactiveComputed',
      desc: '返回reactive 的计算属性',
      demo: false,
    },
    {
      name: 'reactiveOmit',
      desc: 'reactive 属性排除',
      demo: false,
    },
    {
      name: 'reactivePick',
      desc: 'reactive 属性提取',
      demo: false,
    },
    {
      name: 'refAutoReset',
      desc: '可自动恢复默认的ref',
      demo: false,
    },
    {
      name: 'refDebounced',
      desc: '带防抖的 ref',
      demo: false,
    },
    {
      name: 'refDefault',
      desc: '带默认值的 ref，设为undefined 时自动使用默认值',
      demo: false,
    },
    {
      name: 'refThrottled',
      desc: '带节流的 ref',
      demo: false,
    },
    {
      name: 'refWithControl',
      desc: '可控制的 ref',
      demo: false,
    },
    {
      name: 'set',
      desc: '修改ref.value 的简写',
      demo: false,
    },
    {
      name: 'syncRef',
      desc: '带防抖的 ref',
      demo: false,
    },
    {
      name: 'syncRef',
      desc: '两个ref 之间的相互同步',
      demo: false,
    },
    {
      name: 'syncRefs',
      desc: '有目标与同步关系的两个ref',
      demo: false,
    },
    {
      name: 'toReactive',
      desc: '将 ref 转换至 reactive',
      demo: false,
    },
    {
      name: 'toRefs',
      desc: 'toRefs 的扩展，使之可接受一个对象值的 ref',
      demo: false,
    },
    {
      name: 'useAsyncQueue',
      desc: '顺序执行异步队列，队列间前一个任务将结果抛出给下一个任务',
      demo: false,
    },
    {
      name: 'useBase64',
      desc: 'Base64，支持文本、buffer、文件、图片',
      demo: false,
    },
    {
      name: 'useCached',
      desc: '自定义比较放市场缓存 ref',
      demo: false,
    },
    {
      name: 'useClamp',
      desc: '一个带有区间限制的 ref',
      demo: false,
    },
    {
      name: 'useConfirmDialog',
      desc: '弹窗事件链',
      demo: false,
    },
    {
      name: 'useCounter',
      desc: '简单计数控制',
      demo: false,
    },
    {
      name: 'useCycleList',
      desc: '循环控制',
      demo: false,
    },
    {
      name: 'useDateFormat',
      desc: '日期格式化',
      demo: false,
    },
    {
      name: 'useDebounceFn',
      desc: '防抖函数',
      demo: false,
    },
    {
      name: 'useEventBus',
      desc: 'event bus',
      demo: false,
    },
    {
      name: 'useLastChanged',
      desc: '记录最后修改时间',
      demo: false,
    },
    {
      name: 'useMemoize',
      desc: '缓存函数执行结果',
      demo: false,
    },
    {
      name: 'useOffsetPagination',
      desc: '分页',
      demo: false,
    },
    {
      name: 'useThrottleFn',
      desc: '节流函数',
      demo: false,
    },
    {
      name: 'useTimeoutPoll',
      desc: '轮询，超时自动进行下一轮，可暂停、可恢复',
      demo: false,
    },
    {
      name: 'useToggle',
      desc: '布尔值切换',
      demo: false,
    },
  ],
  watch: [
    {
      name: 'until',
      desc: '目标满足时从 pending → resolve，一次性',
      demo: false,
    },
    {
      name: 'watchAtMost',
      desc: '带次数上限的 watch',
      demo: false,
    },
    {
      name: 'watchDebounced',
      desc: '带防抖的 watch',
      demo: false,
    },
    {
      name: 'watchIgnorable',
      desc: '带屏蔽的 watch',
      demo: false,
    },
    {
      name: 'watchOnce',
      desc: '一次性的 watch',
      demo: false,
    },
    {
      name: 'watchPausable',
      desc: '可暂停的 watch',
      demo: false,
    },
    {
      name: 'watchThrottled',
      desc: '带节流的 watch',
      demo: false,
    },
    {
      name: 'watchWithFilter',
      desc: '可自配置过滤的 watch',
      demo: false,
    },
    {
      name: 'whenever',
      desc: '目标为真时执行的 watch',
      demo: false,
    },
  ],
}