<?php

/**
 * Generic Regionality functionality class for EDD Stripe.
 *
 * @package EDD_Stripe
 * @since 2.9.2.2
 */
abstract class EDD_Stripe_Region_Base {

	/**
	 * Country code.
	 *
	 * @since 2.9.2.2
	 * @var   string
	 */
	public $country_code;

	/**
	 * If the country requires a card name.
	 *
	 * @since 2.9.2.2
	 * @var   bool
	 */
	public $requires_card_name;

	/**
	 * If the country requires a card address.
	 *
	 * @since 2.9.2.2
	 * @var   bool
	 */
	public $requires_card_address;

	/**
	 * Constructor.
	 *
	 * @since 2.9.2.2
	 */
	public function __construct() {
		$this->setup_filters();
	}

	/**
	 * Applies various filters.
	 */
	protected function setup_filters() {
		// Possibly add a message above the address fields if they are required.
		add_filter( 'edd_settings_gateways', array( $this, 'add_billing_address_message' ), 30 );
	}

	/**
	 * Inserts a descriptive text setting prior to the address fields setting if a region requires card address.
	 *
	 * @since 2.9.2.2
	 *
	 * @param array $settings The current registered settings.
	 *
	 * @return array The settings with the new descriptive text, if necessary.
	 */
	public function add_billing_address_message( $settings ) {
		// The current region does not require card address.
		if ( ! $this->requires_card_address ) {
			return $settings;
		}

		$current_billing_fields_option = edd_get_option( 'stripe_billing_fields' );
		// The current region requires card address, but the billing fields option is set to "full" already.
		if ( 'full' === $current_billing_fields_option ) {
			return $settings;
		}

		$setting = array(
			'id'    => 'stripe_billing_address_message',
			'name'  => '',
			'desc'  => $this->get_billing_fields_message_output(),
			'type'  => 'descriptive_text',
			'class' => 'edd-stripe-connect-row',
		);

		$position = array_search(
			'stripe_billing_fields',
			array_keys(
				$settings['edd-stripe']
			),
			true
		);

		array_splice(
			$settings['edd-stripe'],
			$position,
			0,
			array(
				'stripe_billing_address_message' => $setting,
			)
		);

		return $settings;
	}

	/**
	 * Output a message concerning regions that should collect 'full address' information.
	 *
	 * @since 2.9.2.2
	 */
	protected function get_billing_fields_message_output() {
		ob_start();
		?>
		<div id="edds-stripe-billing-fields-message" class="notice inline notice-warning">
			<p>
				<?php
					printf(
						esc_html__( 'Based on your store\'s base country of %s, it is recommended to set your Billing Address Display to use the "Full Address" option to ensure payments are completed successfully.', 'easy-digital-downloads' ),
						edd_get_country_name( edd_get_option( 'base_country', 'US' ) )
					);
				?>
			</p>
		</div>
		<?php

		return ob_get_clean();
	}
}
