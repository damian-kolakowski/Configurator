export enum rate_modes_t {
  RATE_MODE_SILVERWARE,
  RATE_MODE_BETAFLIGHT,
  RATE_MODE_ACTUAL,
}

export enum silverware_rates_t {
  SILVERWARE_MAX_RATE,
  SILVERWARE_ACRO_EXPO,
  SILVERWARE_ANGLE_EXPO,
}

export enum betaflight_rates_t {
  BETAFLIGHT_RC_RATE,
  BETAFLIGHT_SUPER_RATE,
  BETAFLIGHT_EXPO,
}

export enum actual_rates_t {
  ACTUAL_CENTER_SENSITIVITY,
  ACTUAL_MAX_RATE,
  ACTUAL_EXPO,
}

export enum rate_profiles_t {
  STICK_RATE_PROFILE_1,
  STICK_RATE_PROFILE_2,
  STICK_RATE_PROFILE_MAX,
}

export type vec3_t = number[];

export interface rate_t {
  mode: rate_modes_t;
  rate: vec3_t[];
}

export interface profile_rate_t {
  profile: rate_profiles_t;
  rates: rate_t[];
  level_max_angle: number;
  sticks_deadband: number;
  throttle_mid: number;
  throttle_expo: number;
  low_rate_mulitplier?: number;
}

export interface pid_rate_t {
  kp: vec3_t;
  ki: vec3_t;
  kd: vec3_t;
}

export interface angle_pid_rate_t {
  kp: number;
  kd: number;
}

export interface pid_rate_preset_t {
  index: number;
  name: string;
  rate: pid_rate_t;
}

export enum pid_profile_t {
  PID_PROFILE_1,
  PID_PROFILE_2,
  PID_PROFILE_MAX,
}

export interface stick_rate_t {
  accelerator: vec3_t;
  transition: vec3_t;
}

export enum stick_profile_t {
  STICK_PROFILE_OFF,
  STICK_PROFILE_ON,
  STICK_PROFILE_MAX,
}

export enum tda_active_t {
  THROTTLE_D_ATTENTUATION_NONE,
  THROTTLE_D_ATTENUATION_ACTIVE,
  THROTTLE_D_ATTENUATION_MAX,
}

export interface throttle_dterm_attenuation_t {
  tda_active: tda_active_t;
  tda_breakpoint: number;
  tda_percent: number;
}

export interface profile_pid_t {
  pid_profile: pid_profile_t;
  pid_rates: pid_rate_t[];
  stick_profile: stick_profile_t;
  stick_rates: stick_rate_t[];
  big_angle: angle_pid_rate_t;
  small_angle: angle_pid_rate_t;
  throttle_dterm_attenuation: throttle_dterm_attenuation_t;
}

export enum gyro_rotation_t {
  GYRO_ROTATE_NONE = 0x0,
  GYRO_ROTATE_45_CCW = 0x1,
  GYRO_ROTATE_45_CW = 0x2,
  GYRO_ROTATE_90_CW = 0x4,
  GYRO_ROTATE_90_CCW = 0x8,
  GYRO_ROTATE_180 = 0x10,
  GYRO_FLIP_180 = 0x20,
}

export enum dshot_time_t {
  DSHOT_TIME_150 = 150,
  DSHOT_TIME_300 = 300,
  DSHOT_TIME_600 = 600,
}

export interface profile_motor_t {
  digital_idle: number;
  motor_limit: number;
  dshot_time: dshot_time_t;
  invert_yaw: number;
  gyro_orientation: number;
  torque_boost: number;
  throttle_boost: number;
  motor_pins: number[];
  turtle_throttle_percent: number;
}

export enum pid_voltage_compensation_t {
  PID_VOLTAGE_COMPENSATION_NONE,
  PID_VOLTAGE_COMPENSATION_ACTIVE,
}

export interface profile_voltage_t {
  lipo_cell_count: number;
  pid_voltage_compensation: pid_voltage_compensation_t;
  vbattlow: number;
  actual_battery_voltage: number;
  reported_telemetry_voltage: number;
  ibat_scale: number;
}

export interface profile_stick_calibration_limits_t {
  min: number;
  max: number;
}

export interface profile_receiver_t {
  protocol: number;
  aux: number[];
  channel_mapping: number;
  lqi_source: number;
  stick_calibration_limits: profile_stick_calibration_limits_t[];
}

export interface profile_serial_t {
  rx: number;
  smart_audio: number;
  hdzero: number;
}

export interface profile_osd_t {
  callsign: string;
  elements: number[];
  elements_hd: number[];
}

export interface profile_filter_parameter_t {
  type: number;
  cutoff_freq: number;
}

export interface profile_filter_t {
  gyro: profile_filter_parameter_t[];
  dterm: profile_filter_parameter_t[];
  dterm_dynamic_enable: number;
  dterm_dynamic_min: number;
  dterm_dynamic_max: number;
}

export interface profile_metadata_t {
  name: string;
  datetime: number;
}

// Full Profile
export interface profile_t {
  meta: profile_metadata_t;
  motor: profile_motor_t;
  serial: profile_serial_t;
  filter: profile_filter_t;
  osd: profile_osd_t;
  rate: profile_rate_t;
  receiver: profile_receiver_t;
  pid: profile_pid_t;
  voltage: profile_voltage_t;
}

export enum target_feature_t {
  FEATURE_BRUSHLESS = 1 << 1,
  FEATURE_OSD = 1 << 2,
  FEATURE_BLACKBOX = 1 << 3,
  FEATURE_DEBUG = 1 << 4,
}

export interface target_info_t {
  target_name: string;
  git_version: string;

  features: number;
  rx_protocols: number[];
  quic_protocol_version: number;

  motor_pins: string[];
  usart_ports: string[];

  gyro_id: number;
}
