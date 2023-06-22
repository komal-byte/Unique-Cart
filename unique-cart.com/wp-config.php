<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'demo' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'CE6v.ir@M$V^woH>&v_uy41gDdmmn$*s&A:=[0^9?`Dp&gp!_200oFRT#jGPf_}B' );
define( 'SECURE_AUTH_KEY',  '=L!O+.!fO82N:5bj=%`Uzf(!0Q/Eh1y]!u[V<3,UkqZd*d5C7w#F?{y9%l(~|QXX' );
define( 'LOGGED_IN_KEY',    'GbR}lupxmy~@k=&XiEnHAfi;MC~=%I0X%tQ2P(t4v/)J:8LHXc|&l;9k<K*!] ,1' );
define( 'NONCE_KEY',        'U*7@gVHd4Z@b3yjZ-t4am#GA5_]$VLA5;*`Dcul0DO6N&Ctm,@V1YiW=9z57<v+7' );
define( 'AUTH_SALT',        'FeJ4x_]OQR[<RX@~Ws;/k:FiDgqQc4Y8R3r@zfa:u;$(4k8xvwvzd+UldGd]e89`' );
define( 'SECURE_AUTH_SALT', '4/z%ag.0z]I`jeQ&pTqq|4TbiU P@nje.])JeIEor([WP^9Ea<LO$#5G6=[Dictr' );
define( 'LOGGED_IN_SALT',   '?[@i&0`OzMjM7K_eYCk_;GC?D|e.Hx7ff2`&FhXK;&iJo;}A0S;y7-[Z#j;r9C~E' );
define( 'NONCE_SALT',       '>}=IS-4+Y]:]]/>jMU;&5GLL@P&IN0~/yFPF Q?EvZl|g>}ls{f|9^f*-t+Gasa9' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
