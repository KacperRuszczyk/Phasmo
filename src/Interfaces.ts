export interface GhostList {
    ghosts: Ghost[]
    version: string
    evidence: string[]
  }
  
  export interface Ghost {
    ghost: string
    min_speed: number
    max_speed?: number
    alt_speed?: number
    speed_is_range: boolean
    has_los: boolean
    hunt_sanity: string
    hunt_sanity_low: string
    hunt_sanity_high: string
    evidence: evidence[]
    nightmare_evidence?: string
    portrait : string
    wiki: Wiki
  }
  export type evidence = 'Writing'|'EMF 5'|'Ultraviolet'|'Freezing'|'DOTs'|'Ghost Orbs'|'Spirit Box'
  
  export interface Wiki {
    tells: Tell[]
    behaviors: Behavior[]
    abilities: Ability[]
    hunt_sanity: HuntSanity[]
    hunt_speed: HuntSpeed[]
    evidence: Evidence[]
    confirmation_tests: ConfirmationTest[]
    elimination_tests: EliminationTest[]
  }
  
  export interface Tell {
    data: string
    is_0_evi: boolean
    include_on_card: boolean
  }
  
  export interface Behavior {
    data: string
    is_0_evi: boolean
    include_on_card: boolean
  }
  
  export interface Ability {
    data: string
    is_0_evi: boolean
    include_on_card: boolean
    note?: string
  }
  
  export interface HuntSanity {
    data: string
    include_on_card: boolean
  }
  
  export interface HuntSpeed {
    data: string
    include_on_card: boolean
  }
  
  export interface Evidence {
    data: string
    include_on_card: boolean
  }
  
  export interface ConfirmationTest {
    type: string
    data: string
    definitive: boolean
    image?: string
  }
  
  export interface EliminationTest {
    type: string
    data: string
    image?: string
  }
  