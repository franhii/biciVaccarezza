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
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'muebleriavaccarezza' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

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
define( 'AUTH_KEY',         'gtf~d6{t[,|%r4gH@km1}W3<cM4? +7c=J(giHN$($w6`#q6c|{6@R)=IISf]Kig' );
define( 'SECURE_AUTH_KEY',  'qqW~eGa*AU9,VE4Kczkk?iKKhV:FSWt]<R^2_|`;$:A#ICo9ZwHlBUrm]r<<U/gr' );
define( 'LOGGED_IN_KEY',    '&?gv*!#?UuhNTl|X;-[fF3MM#-nr6TY;Lx9C <a5@1r?5Wp#:8r{PfAsfXH2}++w' );
define( 'NONCE_KEY',        'GaQ%oBVHtQz^!kizLj3!:WBbwc:xPZ_hSG`eXvL!n#c9-R,c(]&p:HU.}^(/C:|2' );
define( 'AUTH_SALT',        '[sMKC1cYfv+(C~@O<nBoGLl/+3;)j?]FzL@Fr+vT]OCkv:#V)pr]i 6oGN):VD.<' );
define( 'SECURE_AUTH_SALT', 'lo1N:-c,<2ma1OBb9`AxLqOA~`?3.Y[(}b:[%f%w{-=tz5QFS9{,_>Y2[&ZVmOg:' );
define( 'LOGGED_IN_SALT',   'u+$8KUqxI&Q1M1a8@Qs~`sVSSj@YTZyJ fZ})R<6a+T;)tVAs9{C$7W]jJ`L|a`G' );
define( 'NONCE_SALT',       ']Frq/|$D[OkLDh$Vw-zm#99VN<r=aAY8dB]DpX2i#Y,Pt8T?VP39{aXXihaxLvz&' );

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
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
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
