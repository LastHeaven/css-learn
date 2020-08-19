import { createRouter, createWebHashHistory } from 'vue-router'

const files = require.context('@/view/learn/', false, /\.vue/)

const routes = files.keys().map(key => {
  const name = /\.\/(.*)\.vue/.exec(key)[1]
  const path = '/' + name.replace(/([A-Z0-9])/g, '-$1').toLowerCase().substr(1)
  const module = files(key)
  return {
    path,
    component: module.default || module
  }
})

export const routerHistory = createWebHashHistory()
export const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '',
      component: () => import('@/view/Home')
    },
    ...routes
    // {
    //   path: '/cross-animation',
    //   component: () => import('@/view/effect/CrossAnimation')
    // },
    // {
    //   path: '/text-split',
    //   component: () => import('@/view/effect/TextSplit')
    // },
    // {
    //   path: '/random-particle',
    //   component: () => import('@/view/effect/RandomParticle')
    // },
    // {
    //   path: '/pseudo-class',
    //   component: () => import('@/view/effect/PseudoClass')
    // },
    // {
    //   path: '/multi-border',
    //   component: () => import('@/view/effect/MultiBorder')
    // },
    // {
    //   path: '/pseudo-element',
    //   component: () => import('@/view/effect/PseudoElement')
    // },
    // {
    //   path: '/attr-text',
    //   component: () => import('@/view/effect/AttrText')
    // },
    // {
    //   path: '/bling-button',
    //   component: () => import('@/view/effect/BlingButton')
    // },
    // {
    //   path: '/custom-input',
    //   component: () => import('@/view/effect/CustomInput')
    // },
    // {
    //   path: '/profile-card',
    //   component: () => import('@/view/effect/ProfileCard')
    // },
    // {
    //   path: '/nav-tab',
    //   component: () => import('@/view/effect/NavTab')
    // },
    // {
    //   path: '/box-shadow',
    //   component: () => import('@/view/effect/BoxShadow')
    // },
    // {
    //   path: '/loading',
    //   component: () => import('@/view/effect/Loading')
    // },
    // {
    //   path: '/staggered-glow-in-text',
    //   component: () => import('@/view/effect/StaggeredGlowInText')
    // },
    // {
    //   path: '/neon-text',
    //   component: () => import('@/view/effect/NeonText')
    // },
    // {
    //   path: '/fake-3d-text',
    //   component: () => import('@/view/effect/Fake3dText')
    // },
    // {
    //   path: '/menu-hover-fill-text',
    //   component: () => import('@/view/effect/MenuHoverFillText')
    // },
    // {
    //   path: '/confirm-modal',
    //   component: () => import('@/view/effect/ConfirmModal')
    // },
    // {
    //   path: '/particle-button',
    //   component: () => import('@/view/effect/ParticleButton')
    // },
    // {
    //   path: '/gauge',
    //   component: () => import('@/view/effect/Gauge')
    // },
    // {
    //   path: '/snow-scratch',
    //   component: () => import('@/view/effect/SnowScratch')
    // },
    // {
    //   path: '/frosted-glass',
    //   component: () => import('@/view/effect/FrostedGlass')
    // },
    // {
    //   path: '/video-mask-text',
    //   component: () => import('@/view/effect/VideoMaskText')
    // },
    // {
    //   path: '/name-card-hover-expand',
    //   component: () => import('@/view/effect/NameCardHoverExpand')
    // },
    // {
    //   path: '/cross-bar-glitch-text',
    //   component: () => import('@/view/effect/CrossBarGlitchText')
    // },
    // {
    //   path: '/circle-arrow-nav',
    //   component: () => import('@/view/effect/CircleArrowNav')
    // },
    // {
    //   path: '/card-flip-reflection',
    //   component: () => import('@/view/effect/CardFlipReflection')
    // },
    // {
    //   path: '/menu-hover-image',
    //   component: () => import('@/view/effect/MenuHoverImage')
    // },
    // {
    //   path: '/mawaru',
    //   component: () => import('@/view/effect/Mawaru')
    // },
    // {
    //   path: '/shinchou-menu',
    //   component: () => import('@/view/effect/ShinchouMenu')
    // },
    // {
    //   path: '/shining-text',
    //   component: () => import('@/view/effect/ShiningText')
    // },
    // {
    //   path: '/menu-hover-underline',
    //   component: () => import('@/view/effect/MenuHoverUnderline')
    // },
    // {
    //   path: '/toggle',
    //   component: () => import('@/view/effect/Toggle')
    // },
    // {
    //   path: '/transparent-material-login-form',
    //   component: () => import('@/view/effect/TransparentMaterialLoginForm')
    // },
    // {
    //   path: '/spiral-stair-loader',
    //   component: () => import('@/view/effect/SpiralStairLoader')
    // },
    // {
    //   path: '/shooting-star',
    //   component: () => import('@/view/effect/ShootingStar')
    // },
    // {
    //   path: '/ken-burns-effect',
    //   component: () => import('@/view/effect/KenBurnsEffect')
    // },
    // {
    //   path: '/spiral-loading',
    //   component: () => import('@/view/effect/SpiralLoading')
    // },
    // {
    //   path: '/bar-loading',
    //   component: () => import('@/view/effect/BarLoading')
    // },
    // {
    //   path: '/flex-frosted-image-gallery',
    //   component: () => import('@/view/effect/FlexFrostedImageGallery')
    // }
  ],
  async scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
