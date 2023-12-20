(function() {
  var base;

  window.shopstorm || (window.shopstorm = {});

  (base = window.shopstorm).ConditionalLogic || (base.ConditionalLogic = {});

}).call(this);
(function() {
  var ConditionalLogic, OptionField;

  ConditionalLogic = window.shopstorm.ConditionalLogic;

  OptionField = (function() {
    var HIDDEN_CSS_CLASS, _valueGetterFor;

    HIDDEN_CSS_CLASS = 'conditional-logic-hidden';

    function OptionField(productOptionId) {
      this.productOptionId = productOptionId;
      if (!this.productOptionId) {
        return;
      }
      this.$option = ConditionalLogic.$(".product-customizer-option[data-product-option-id=" + this.productOptionId + "]");
      this.$field = this.$option.find('input,select,textarea').filter('[name][type!="hidden"]');
    }

    OptionField.prototype.compareValue = function(operator, value) {
      var comparableValue, currentValue;
      currentValue = this.getValue();
      if (currentValue === null) {
        comparableValue = ConditionalLogic.NullComparableValue;
      } else {
        comparableValue = new ConditionalLogic.ComparableValue(currentValue);
      }
      return comparableValue[operator](value);
    };

    OptionField.prototype.getValue = function() {
      var optionKind;
      if (this.$option.hasClass(HIDDEN_CSS_CLASS)) {
        return null;
      }
      optionKind = this.getOptionKind();
      return _valueGetterFor(optionKind).call(this);
    };

    OptionField.prototype.getOptionKind = function() {
      var optionTypeMatch;
      optionTypeMatch = /option-type-(\S+)/.exec(this.$option.attr('class') || '');
      if (optionTypeMatch) {
        return optionTypeMatch[1];
      } else {
        return '';
      }
    };

    OptionField.prototype.show = function() {
      if (!this.$option.hasClass(HIDDEN_CSS_CLASS)) {
        return false;
      }
      this.restoreFieldRequired();
      this.restoreFields();
      this.$option.show().removeClass(HIDDEN_CSS_CLASS);
      this.reTriggerHandlers();
      return true;
    };

    OptionField.prototype.hide = function() {
      if (this.$option.hasClass(HIDDEN_CSS_CLASS) || this.$option.length === 0) {
        return false;
      }
      this.$option.hide().addClass(HIDDEN_CSS_CLASS);
      this.stashFields();
      this.stashFieldRequired();
      this.reTriggerHandlers();
      return true;
    };

    OptionField.prototype.stashFields = function() {
      var $fields;
      $fields = this.$option.find('input,select,textarea');
      $fields.attr('hidden', 'hidden');
      $fields.prop('disabled', true);
    };

    OptionField.prototype.restoreFields = function() {
      var $fields;
      $fields = this.$option.find('input,select,textarea');
      $fields.removeAttr('hidden');
      $fields.prop('disabled', false);
    };

    OptionField.prototype.stashFieldRequired = function() {
      if (!this.$field.prop('required')) {
        return;
      }
      return this.$field.data('required', true).prop('required', false);
    };

    OptionField.prototype.restoreFieldRequired = function() {
      if (!this.$field.data('required')) {
        return;
      }
      return this.$field.prop('required', true).removeData('required');
    };

    OptionField.prototype.reTriggerHandlers = function() {
      return this.$field.triggerHandler('change');
    };

    _valueGetterFor = function(optionKind) {
      var defaultGetter, specialGetters;
      defaultGetter = function() {
        return (this.$field.val() || '').toLowerCase();
      };
      specialGetters = {
        checkbox: function() {
          if (this.$field.is(':checked')) {
            return 'checked';
          } else {
            return '';
          }
        },
        checkbox_group: function() {
          return this.$option.find('input:checked').toArray().map(function(inputElement) {
            return inputElement.value.toLowerCase();
          });
        },
        file: function() {
          if (this.$field.val()) {
            return 'chosen';
          } else {
            return '';
          }
        },
        radio: function() {
          return (this.$field.filter('input:checked').val() || '').toLowerCase();
        },
        upswatch: function() {
          return (this.$field.filter('input:checked').val() || '').toLowerCase();
        }
      };
      return specialGetters[optionKind] || defaultGetter;
    };

    return OptionField;

  })();

  ConditionalLogic.ComparableValue = (function() {
    function ComparableValue(sourceValue) {
      this.sourceValue = sourceValue;
    }

    ComparableValue.prototype.is = function(value) {
      if (Array.isArray(this.sourceValue)) {
        return this.contains(value);
      }
      return this.sourceValue === value;
    };

    ComparableValue.prototype.isNot = function(value) {
      return !this.is(value);
    };

    ComparableValue.prototype.contains = function(value) {
      return this.sourceValue.indexOf(value) !== -1;
    };

    ComparableValue.prototype.startsWith = function(value) {
      return this.sourceValue.indexOf(value) === 0;
    };

    ComparableValue.prototype.endsWith = function(value) {
      var tailMarker;
      tailMarker = this.sourceValue.length - value.length;
      if (tailMarker < 0) {
        return false;
      }
      return this.sourceValue.substring(tailMarker) === value;
    };

    ComparableValue.prototype.greaterThan = function(value) {
      if (/^[\d\.]+$/.test(value)) {
        return +this.sourceValue > +value;
      }
      return this.sourceValue > value;
    };

    ComparableValue.prototype.lessThan = function(value) {
      if (/^[\d\.]+$/.test(value)) {
        return +this.sourceValue < +value;
      }
      return this.sourceValue < value;
    };

    return ComparableValue;

  })();

  ConditionalLogic.NullComparableValue = (function() {
    var returnFalse;
    returnFalse = function(_value) {
      return false;
    };
    return {
      sourceValue: null,
      is: returnFalse,
      isNot: function(_value) {
        return true;
      },
      contains: returnFalse,
      startsWith: returnFalse,
      endsWith: returnFalse,
      greaterThan: returnFalse,
      lessThan: returnFalse
    };
  })();

  ConditionalLogic.OptionField = OptionField;

}).call(this);
(function() {
  var Action, OptionField;

  OptionField = window.shopstorm.ConditionalLogic.OptionField;

  Action = (function() {
    var reverseMethods;

    function Action(actionData) {
      this.productOptionId = actionData.product_option_id;
      this.method = actionData.action_type;
      this.reversed = false;
    }

    Action.prototype.execute = function() {
      var field;
      field = new OptionField(this.productOptionId);
      this.reversed = false;
      return field[this.method]();
    };

    Action.prototype.reverse = function() {
      var field, method;
      field = new OptionField(this.productOptionId);
      method = reverseMethods[this.method];
      this.reversed = true;
      return field[method]();
    };

    Action.prototype.isEquivalentOf = function(otherAction) {
      return ['productOptionId', 'method', 'reversed'].every((function(_this) {
        return function(property) {
          return _this[property] === otherAction[property];
        };
      })(this));
    };

    reverseMethods = {
      hide: 'show',
      show: 'hide'
    };

    return Action;

  })();

  window.shopstorm.ConditionalLogic.Action = Action;

}).call(this);
(function() {
  var Condition, OptionField;

  OptionField = window.shopstorm.ConditionalLogic.OptionField;

  Condition = (function() {
    function Condition(conditionData) {
      this.productOptionId = conditionData.product_option_id;
      this.operator = conditionData.operator;
      this.value = conditionData.value.toLowerCase();
    }

    Condition.prototype.evaluate = function() {
      var field;
      field = new OptionField(this.productOptionId);
      return field.compareValue(this.operator, this.value);
    };

    return Condition;

  })();

  window.shopstorm.ConditionalLogic.Condition = Condition;

}).call(this);
(function() {
  var Action, Condition, Rule;

  Condition = window.shopstorm.ConditionalLogic.Condition;

  Action = window.shopstorm.ConditionalLogic.Action;

  Rule = (function() {
    var _conditionIsTrue;

    function Rule(ruleData) {
      this.logicMatch = ruleData.logic_match;
      this.conditions = ruleData.conditions;
      this.actions = ruleData.actions;
    }

    Rule.prototype.evaluateConditions = function() {
      var ref;
      if ((ref = this.logicMatch) !== 'all' && ref !== 'any' && ref !== 'none') {
        throw new Error("Conditional Logic unknown rule logicMatch '" + this.logicMatch + "'. Must be one of [all, any, none]");
      }
      return Rule[this.logicMatch].call(this);
    };

    Rule.prototype.run = function() {
      var actionsCausingChange, matched;
      actionsCausingChange = [];
      matched = this.evaluateConditions();
      this.actions.forEach(function(actionParams) {
        var action, result;
        action = new Action(actionParams);
        result = matched ? action.execute() : action.reverse();
        if (result) {
          return actionsCausingChange.push(action);
        }
      });
      return actionsCausingChange;
    };

    Rule.all = function() {
      return this.conditions.every(_conditionIsTrue);
    };

    Rule.any = function() {
      return this.conditions.some(_conditionIsTrue);
    };

    Rule.none = function() {
      return !this.conditions.some(_conditionIsTrue);
    };

    _conditionIsTrue = function(params) {
      return new Condition(params).evaluate();
    };

    return Rule;

  })();

  window.shopstorm.ConditionalLogic.Rule = Rule;

}).call(this);
(function() {
  var ConditionalLogic, _detectConsequentialAction, _indexActionsByPO, _loopCounter, _resetLoopCounter, _rulesLoopSafety;

  ConditionalLogic = window.shopstorm.ConditionalLogic;

  _loopCounter = 0;

  ConditionalLogic.runAll || (ConditionalLogic.runAll = function() {
    var actionsCausingChange, rules;
    actionsCausingChange = [];
    rules = ConditionalLogic.rules || [];
    rules.forEach(function(ruleParams) {
      var result, rule;
      rule = new ConditionalLogic.Rule(ruleParams);
      result = rule.run();
      return actionsCausingChange = actionsCausingChange.concat(result);
    });
    if (_detectConsequentialAction(actionsCausingChange) && _rulesLoopSafety(rules.length + 1)) {
      return ConditionalLogic.runAll();
    } else {
      return _resetLoopCounter();
    }
  });

  ConditionalLogic.init || (ConditionalLogic.init = function($) {
    ConditionalLogic.$ || (ConditionalLogic.$ = $);
    ConditionalLogic.$('.product-customizer-options').off('change', ConditionalLogic.runAll).on('change', ConditionalLogic.runAll);
    return ConditionalLogic.runAll();
  });

  _detectConsequentialAction = function(actionsCausingChange) {
    var actionsByPO, firstPOAction, lastPOAction, poId, ref;
    if (!actionsCausingChange.length) {
      return false;
    }
    actionsByPO = _indexActionsByPO(actionsCausingChange);
    for (poId in actionsByPO) {
      ref = actionsByPO[poId], firstPOAction = ref[0], lastPOAction = ref[ref.length - 1];
      if (firstPOAction.isEquivalentOf(lastPOAction)) {
        return true;
      }
    }
    return false;
  };

  _indexActionsByPO = function(actionsList) {
    return actionsList.reduce(function(obj, action) {
      var poId;
      poId = action.productOptionId;
      obj[poId] = (obj[poId] || []).concat(action);
      return obj;
    }, {});
  };

  _rulesLoopSafety = function(maxLoops) {
    var evenMax;
    evenMax = !(maxLoops % 2);
    if (evenMax) {
      maxLoops++;
    }
    if (_loopCounter < maxLoops) {
      _loopCounter++;
      return true;
    } else {
      _resetLoopCounter();
      console.warn("Product Customizer conditional logic detected looping rules - interrupting.");
      return false;
    }
  };

  _resetLoopCounter = function() {
    return _loopCounter = 0;
  };

}).call(this);
if (typeof(window.shopstorm) === 'undefined') {
	window.shopstorm = {
		apps: {
			productCustomizer: {}
		}
	};
} else if (typeof(window.shopstorm.apps) === 'undefined') {
	window.shopstorm.apps = {
		productCustomizer: {}
	};
} else if (typeof(window.shopstorm.apps.productCustomizer) === 'undefined') {
	window.shopstorm.apps.productCustomizer = {};
}

(function(window, document, version, callback) {
	var j, d;
	var loaded = false;
	// we now store the jQuery object used by this script within the shopstorm
	// object in order to handle the case of the main page jQuery being switched
	// *after* some synchronous javascript may have run (e.g. we bind to some
	// of our custom events in shopstorm-apps.js with jQuery "A") but *before*
	// this initialization code is run (e.g. jQuery "B" is loaded into the window
	// scope, we run this init, and now we trigger our custom events on "B" which
	// our listeners bound to "A" would never hear about)
	if (typeof(window.shopstorm) !== 'undefined' &&
		typeof(window.shopstorm.apps) !== 'undefined' &&
		typeof(window.shopstorm.apps.productCustomizer) !== 'undefined' &&
		typeof(window.shopstorm.apps.productCustomizer.$) !== 'undefined') {
		j = window.shopstorm.apps.productCustomizer.$;
		window.pc$ = j;
	} else {
		j = window.jQuery;
		window.pc$ = j;
	}

	async function waitForPCOptions(callback, j, loaded){
		if(typeof(window.product_customizer_loaded) != 'undefined') return;

		if(j(".product-customizer-options.product-customizer-setup-wizard-initialized").length) {
			window.product_customizer_waiting = false;
			window.product_customizer_loaded = true;
			return callback(j, loaded);
		}
		setTimeout(waitForPCOptions, 10, callback, j, loaded);
	}

	if (!j || version_compare(version, j.fn.jquery) == 1) {
		var script = document.createElement("script");
		script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
		script.onload = script.onreadystatechange = function() {
			if (!loaded && (!(d = this.readyState) || d == "loaded" || d == "complete") && typeof(window.product_customizer_waiting) == 'undefined') {
				j = jQuery.noConflict(true);
				window.pc$ = j;
				console.log("[Product Customizer] Waiting for product options to load...");
				window.product_customizer_waiting = true;
				waitForPCOptions(callback, j, true);
				j(script).remove();
			}
		};
		try {
			document.body.appendChild(script);
		} catch (err) {
			try {
				document.documentElement.childNodes[0].appendChild(script);
			} catch (err) {
				console.warn('[Product Customizer] Error Loading Script');
			}
		}
	}
	else if(typeof(window.product_customizer_waiting) == 'undefined') {
		console.log("[Product Customizer] Waiting for product options to load...");
		window.product_customizer_waiting = true;
		waitForPCOptions(callback, j, true);
	}

	function version_compare(v1, v2) {
		v1 = v1.split('.');
		v2 = v2.split('.');

		for (i = 0, ix = Math.max(v1.length, v2.length); i < ix; i++) {
			var v1i = parseInt(v1[i]);
			var v2i = parseInt(v2[i]);
			if (v1i > v2i || isNaN(v2i)) {
				return 1;
			}
			if (v2i > v1i || isNaN(v1i)) {
				return -1;
			}
		}
		return 0;
	}
})(window, document, '2.0.1', function($, jquery_loaded) {
	console.log("[Product Customizer] Options Loaded, Script Version 2.0.1 Loaded");

	window.shopstorm = window.shopstorm || {};
	window.shopstorm.shop = window.shopstorm.shop || {};
	window.shopstorm.shop.moneyFormat = window.shopstorm.shop.moneyFormat || null;
	window.shopstorm.apps = window.shopstorm.apps || {};
	window.shopstorm.apps.productCustomizer = window.shopstorm.apps.productCustomizer || {};
	window.shopstorm.apps.productCustomizer.$ = window.shopstorm.apps.productCustomizer.$ || $;
	window.shopstorm.apps.productCustomizer.jQueries = window.shopstorm.apps.productCustomizer.jQueries || [$];
	window.productCustomizerCallbacks = window.productCustomizerCallbacks || {};

	// for better support of themes that late-load their jquery
	if (typeof(window.shopstorm.apps.productCustomizer.jqueryLoadedCallback) === 'function') {
		window.shopstorm.apps.productCustomizer.jqueryLoadedCallback($);
	}

	// public functions

	if (typeof shopstorm.apps.productCustomizer.collectOptionsCost == 'undefined') {
		shopstorm.apps.productCustomizer.collectOptionsCost = function(productId, includeRequired) {
			includeRequired = includeRequired || false;
			var $optionsContainer = $('.product-customizer-options[data-product-id="' + productId + '"]');
			var optionsCost = [];

			if (typeof(shopstorm.apps.productCustomizer.options.productOptions) !== 'undefined' &&
				shopstorm.apps.productCustomizer.options.productOptions[productId]) {
				$.each(shopstorm.apps.productCustomizer.options.productOptions[productId], function(index, fieldData) {
					var fieldKey = fieldData.fieldKey,
						propertyName = fieldData.name,
						i = index + 1,
						$field;
					if (!propertyName && fieldKey.indexOf('_') > -1) {
						propertyName = fieldKey.split('_')[1];
					}
					// Note to future self: relying on a product option ID ultimately became a bit annoying with the support
					// of input groups like checkboxes and radio buttons. To some extent, a class that would be added to
					// every input element and be shared amongst checkbox/radio groups, could be more convenient
					if ($optionsContainer.data('version') && shopstorm.apps.versionCompare($optionsContainer.data('version'), '1.6.3', '>')) {
						$field = $('#' + productId + '_option_' + i);
					} else {
						// up to liquid version 1.6.3, the metafield sort key was used in the option css id
						$field = $('#' + productId + '_option_' + fieldKey.split('_')[0]);
					}

					// When a field was hidden by conditional logic, its price should not be collected.
					if ($field.closest('.product-customizer-option').hasClass('conditional-logic-hidden')) return;
					if (fieldData['option_prices']) {
						var optionPrices = fieldData['option_prices'].split(',');
						if ($field.prop('tagName') === 'SELECT') {
							// handle select/multiselect element: sum cost
							// TODO: an improvement would be to find the minimum price for a select input to use when includeRequired is true, and the select is required and has a placeholder
							var optionPrice = 0;
							if ($field.find('[data-index]').length == 0) {
								// fallback for snippet 1.5.1 and below support
								var priceIndex = $field.prop('selectedIndex');
								if (typeof(priceIndex) != 'undefined') {
									optionPrice += parseInt(optionPrices[priceIndex]) || 0;
								}
							} else {
								$.each($field.find(':selected'), function(index, input) {
									var priceIndex = $(input).data('index');
									optionPrice += parseInt(optionPrices[priceIndex]) || 0;
								});
							}
							optionPrice = shopstorm.apps.productCustomizer.getOptionCost(productId, $field.attr('id'), fieldKey, optionPrice);
							if (optionPrice) {
								optionsCost.push({
									name: propertyName,
									cost: parseInt(optionPrice),
									id: $field.attr('id')
								});
							}
						} else if($field.closest('.option-type-font').length > 0 && $field.attr("selectedIndex")){
							var optionPrice = optionPrices[$field.attr("selectedIndex")];

							optionsCost.push({
								name: propertyName,
								cost: parseInt(optionPrice),
								id: $field.attr('id')
							});
						} else if ($field.closest('.option-type-checkbox_group, .option-type-radio, .option-type-upswatch').length > 0) {
							// handle checkbox group: sum cost
							var optionPrice = 0;
							$.each($field.closest('.option-type-checkbox_group, .option-type-radio, .option-type-upswatch').find('input:checked'), function(index, input) {
								var priceIndex = $(input).attr('id').split('_').pop();
								optionPrice += parseInt(optionPrices[priceIndex]) || 0;
							});
							optionPrice = shopstorm.apps.productCustomizer.getOptionCost(productId, $field.attr('id'), fieldKey, optionPrice);
							if (optionPrice) {
								optionsCost.push({
									name: propertyName,
									cost: parseInt(optionPrice),
									id: $field.attr('id')
								});
							}
						}
					} else if (fieldData['price'] &&
						((!$field.is(':checkbox') && $field.val().trim()) ||
							($field.is(':checkbox') && $field.is(':checked')) ||
							(includeRequired && $field.is(':visible') && $field.prop('required')))
					) {
						var optionPrice = shopstorm.apps.productCustomizer.getOptionCost(productId, $field.attr('id'), fieldKey, parseInt(fieldData['price']));
						if (optionPrice) {
							optionsCost.push({
								name: propertyName,
								cost: parseInt(optionPrice),
								id: $field.attr('id')
							});
						}
					}
					i++;
				});
			}

			return optionsCost;
		};
	}

	if (typeof shopstorm.apps.versionCompare == 'undefined') {
		shopstorm.apps.versionCompare = function(v1, v2, operator) {
			operator = operator || '<=>';

			// simple case: equality
			if (v1 == v2) {
				switch (operator) {
					case '<=>':
						return 0;
					case '>':
						return false;
					case '>=':
						return true;
				}
			}

			v1 = v1.split('.');
			v2 = v2.split('.');

			for (i = 0, ix = Math.max(v1.length, v2.length); i < ix; i++) {
				var v1i = parseInt(v1[i]);
				var v2i = parseInt(v2[i]);
				switch (operator) {
					case '<=>':
						if (v1i > v2i || isNaN(v2i)) {
							return 1;
						}
						if (v2i > v1i || isNaN(v1i)) {
							return -1;
						}
						break;
					case '>':
					case '>=':
						if (v1i > v2i || isNaN(v2i)) {
							return true;
						}
						if (v2i > v1i || isNaN(v1i)) {
							return false;
						}
						break;
				}
			}
		};
	}

	if (typeof shopstorm.apps.productCustomizer.getOptionCost == 'undefined') {
		shopstorm.apps.productCustomizer.getOptionCost = function(productId, fieldId, fieldKey, cost) {
			var modifierPercentage = 100;
			// If This is a recharge recurring order
			if ($('.rc_container input.rc_radio:checked').val() == 'autodeliver') {
				modifierPercentage = modifierPercentage - shopstorm.apps.productCustomizer.options.discount;
			}
			return cost * modifierPercentage / 100;
		};
	}

	if (typeof shopstorm.apps.productCustomizer.sumOptionsCost == 'undefined') {
		shopstorm.apps.productCustomizer.sumOptionsCost = function(param, includeRequired) {
			includeRequired = includeRequired || false;
			var totalCost = 0;
			if (!$.isArray(param)) {
				param = shopstorm.apps.productCustomizer.collectOptionsCost(param, includeRequired);
			}
			$.each(param, function(_key, option) {
				totalCost += option.cost;
			});
			return totalCost;
		};
	}

	if (typeof shopstorm.apps.productCustomizer.generatePricingItemUniqueId == 'undefined') {
		shopstorm.apps.productCustomizer.generatePricingItemUniqueId = function() {
			return Math.floor(Math.random() * 1000000000000000);
		};
	}

	if (typeof shopstorm.apps.productCustomizer.getMainProductQuantity == 'undefined') {
		shopstorm.apps.productCustomizer.getMainProductQuantity = function(productId) {
			var $optionsContainer = $('.product-customizer-options[data-product-id="' + productId + '"]');
			var $form = $optionsContainer.closest('form[action="/cart/add"], form[action^="/cart/add?"]');
			var productQuantity = 1;
			var $productQuantity = $form.find('[name=quantity]');

			if ($productQuantity.length > 0) {
				// anything other than an integer, default to 1 per shopify's handling
				if ($productQuantity.val().match(/^\d+$/)) {
					productQuantity = parseInt($productQuantity.val());
				}
			}

			return productQuantity;
		};
	}

	if (typeof shopstorm.apps.productCustomizer.setupMainProductPricingProperties == 'undefined') {
		shopstorm.apps.productCustomizer.setupMainProductPricingProperties = function(productId, pricingRef) {
			var $optionsContainer = $('.product-customizer-options[data-product-id="' + productId + '"]');
			var $form = $optionsContainer.closest('form[action="/cart/add"], form[action^="/cart/add?"]');
			var optionsCost = shopstorm.apps.productCustomizer.collectOptionsCost(productId);
			var sumOptionsCost = shopstorm.apps.productCustomizer.sumOptionsCost(optionsCost);
			var totalOptionsCost = sumOptionsCost * shopstorm.apps.productCustomizer.getMainProductQuantity(productId);

			// normal add to cart
			if (!totalOptionsCost) {
				$('input[name^="properties[_pc_pricing"]').remove();
				return false;
			}

			if ($optionsContainer.find('input[name="properties[_pc_pricing_ref]"]').length == 0) {
				$optionsContainer.append('<input type="hidden" name="properties[_pc_pricing_ref]" value="">');
			}
			if ($optionsContainer.find('input[name="properties[_pc_pricing_qty]"]').length == 0) {
				$optionsContainer.append('<input type="hidden" name="properties[_pc_pricing_qty]" value="">');
			}

			$form.find('input[name="properties[_pc_pricing_ref]"]').val(pricingRef);
			$form.find('input[name="properties[_pc_pricing_qty]"]').val(sumOptionsCost);

			return true;
		};
	}

	if (typeof shopstorm.apps.productCustomizer.addOptionPricingItemToCart == 'undefined') {
		shopstorm.apps.productCustomizer.addOptionPricingItemToCart = function(productId, pricingRef, pricingQty) {
			var $optionsContainer = $('.product-customizer-options[data-product-id="' + productId + '"]').eq(0);
			var $form = $optionsContainer.closest('form[action="/cart/add"], form[action^="/cart/add?"]');
			var optionsCost = shopstorm.apps.productCustomizer.collectOptionsCost(productId);
			var sumOptionsCost = shopstorm.apps.productCustomizer.sumOptionsCost(optionsCost);
			pricingRef = pricingRef || shopstorm.apps.productCustomizer.generatePricingItemUniqueId();

			if ($form.data('product-customizer-doing-submit') && shopstorm.apps.productCustomizer.preventDuplicateFormSubmissions) {
				return false;
			}
			$form.data('product-customizer-doing-submit', true);

			// missing required elements?
			if (shopstorm.apps.productCustomizer.formHasMissingRequired($form)) {
				$form.data('product-customizer-doing-submit', false);
				return false;
			}

			var totalOptionsCost = sumOptionsCost * shopstorm.apps.productCustomizer.getMainProductQuantity(productId);

			if (!shopstorm.apps.productCustomizer.setupMainProductPricingProperties(productId, pricingRef)) {
				// normal add to cart
				$form.data('product-customizer-doing-submit', false);
				return true;
			}

			var formData = $form.serializeArray();

			// update form data values
			formData = shopstorm.apps.productCustomizer.updateSerializedArray(formData, 'quantity', totalOptionsCost);
			formData = shopstorm.apps.productCustomizer.updateSerializedArray(formData, 'id', shopstorm.apps.productCustomizer.pricingVariantId);
			formData = shopstorm.apps.productCustomizer.updateSerializedArray(formData, 'properties[_pc_pricing_qty]', null);
			formData = shopstorm.apps.productCustomizer.updateSerializedArray(formData, 'id[]', null);

			// make any file upload input values look nicer (remove the "fake path") for the pricing product
			$.each($form.find('input:file:visible'), function(key, el) {
				if ($(el).val()) {
					formData = shopstorm.apps.productCustomizer.updateSerializedArray(
						formData,
						$(el).attr('name'), $(el).val().replace("C:\\fakepath\\", '')
					);
				}
			});

			// add the property costs in parens to the paid line item properties for the pricing product
			$.each(optionsCost, function(key, option) {
				formData = shopstorm.apps.productCustomizer.updateSerializedArray(
					formData,
					'properties[' + option.name + ']',
					' (' + option.cost + ')',
					'append'
				);
			});

			// turn all of the product customizations into hidden properties (if supported)
			if (shopstorm.apps.productCustomizer.options.productTitles[productId]) {
				$.each(formData, function(i, val) {
					if (val.name && val.name.indexOf('properties[') == 0 &&
						val.name.indexOf('properties[_') == -1 &&
						val.name != "properties[subscription_id]" && // subscription_id is used by recharge
						val.name != "properties[shipping_interval_frequency]" && // shipping_interval_frequency is used by recharge
						val.name != "properties[shipping_interval_unit_type]") { // shipping_interval_unit_type is used by recharge
						formData[i].name = val.name.replace('properties[', 'properties[_');
					}
				});

				// Display the name of the product that's being customized (wish we could get the variant title in here too)
				var customizationsForText = shopstorm.apps.productCustomizer.customizationsForText ? shopstorm.apps.productCustomizer.customizationsForText : 'Customizations for';
				formData = shopstorm.apps.productCustomizer.updateSerializedArray(formData, 'properties[' + customizationsForText + ']', shopstorm.apps.productCustomizer.options.productTitles[productId]);
			}

			// add our special pricing product to the cart
			response = $.ajax({
				method: 'POST',
				url: '/cart/add.js',
				data: $.param(formData),
				async: false,
				dataType: 'json'
			});

			if (response.status != 200) {
				console.warn('Shopify Product Customizer: dynamic pricing product missing');
			}

			// allow the add to cart form to submit
			return true;
		};
	}

	if (typeof shopstorm.apps.productCustomizer.updateSerializedArray == 'undefined') {
		shopstorm.apps.productCustomizer.updateSerializedArray = function(serializedArray, key, newValue, mode) {
			var newArray = [];
			var keyFound = false;

			$.each(serializedArray, function(index, pair) {
				if (pair.name == key) {
					keyFound = true;
					if (newValue != null) {
						if (mode == 'append') {
							pair.value += newValue;
						} else {
							pair.value = newValue;
						}
						// add the updated key/value to the array
						newArray.push(pair);
					}
				} else {
					newArray.push(pair);
				}
			});

			// add the key/value to the array
			if (!keyFound && newValue != null && mode != 'append') {
				newArray.push({
					name: key,
					value: newValue
				});
			}

			return newArray;
		};
	}

	if (typeof shopstorm.apps.productCustomizer.formHasFileToUpload == 'undefined') {
		shopstorm.apps.productCustomizer.formHasFileToUpload = function(form) {
			var hasFileToUpload = false;
			$.each($(form).find('input[name^=properties]:file:visible'), function() {
				if ($(this).val()) {
					hasFileToUpload = true;
					return false;
				}
			});
			return hasFileToUpload;
		};
	}

	if (typeof shopstorm.apps.productCustomizer.formHasMissingRequired == 'undefined') {
		shopstorm.apps.productCustomizer.formHasMissingRequired = function(form) {
			var missingRequired = false;
			var $checkboxGroups;
			$.each($(form).find('[name^=properties][required]:visible'), function(key, el) {
				if (
					(!$(el).val() && !$(el).is(':checkbox, :radio')) ||
					($(el).is(':checkbox') && !$(el).is(':checked')) ||
					($(el).is(':radio') && $(el).closest('form').find('input[name="' + $(el).attr('name') + '"]:radio:checked').length == 0)) {
					missingRequired = true;
					return false;
				}
			});
			// missing minimum selection checkbox groups?
			$checkboxGroups = $(form).find('.option-type-checkbox_group[data-min-selections]').not('.conditional-logic-hidden');
			$checkboxGroups.each(function(_index, el) {
				var minRequired = Math.min($(el).data('min-selections'), $(el).find('input:checkbox').length);
				if (minRequired > 0 && $(el).find('input:checkbox:checked').length < minRequired) {
					missingRequired = true;
				}
			});
			return missingRequired;
		};
	}

	if (typeof shopstorm.apps.productCustomizer.formMarkMissingRequired == 'undefined') {
		shopstorm.apps.productCustomizer.formMarkMissingRequired = function(form) {

			var missingRequired = false;
			var $firstMissingEl, $checkboxGroups;

			$.each($(form).find('[name^=properties][required]'), function(key, el) {
				if ($(el).is(':checkbox, :radio')) {
					if (($(el).is(':checkbox') && !$(el).is(':checked')) || ($(el).is(':radio') && $(el).closest('form').find('input[name="' + $(el).attr('name') + '"]:radio:checked').length == 0)) {
						if ($(el).parent().prop('tagName') != 'SPAN') {
							$(el).wrap('<span></span>');
						}
						$(el).parent().addClass('missing-required');
						$(el).parent().css('border', '1px solid red');
						missingRequired = true;
						if (!$firstMissingEl) {
							$firstMissingEl = $(el).closest('.product-customizer-option');
						}
					} else if ($(el).parent().hasClass('missing-required')) {
						$(el).parent().removeClass('missing-required');
						$(el).parent().css('border', 'initial');
					}
				} else {
					// all field types besides checkbox/radio
					if (!$(el).val()) {
						if (!$(el).hasClass('missing-required')) {
							$(el).data('original-border', $(el).css('border'));
							$(el).css('border', '1px solid red');
							$(el).addClass('missing-required');
						}
						missingRequired = true;
						if (!$firstMissingEl) {
							$firstMissingEl = $(el).closest('.product-customizer-option');
						}
					} else if ($(el).hasClass('missing-required')) {
						$(el).css('border', $(el).data('original-border'));
						$(el).removeClass('missing-required');
					}
				}
			});

			// handle checkbox group minimum selection count
			$checkboxGroups = $(form).find('.option-type-checkbox_group[data-min-selections]').not('.conditional-logic-hidden');
			$checkboxGroups.each(function(_index, el) {
				var minRequired = Math.min($(el).data('min-selections'), $(el).find('input:checkbox').length);
				var $ul = $(el).find('ul');
				var $message = $(el).find('.product-customizer-selections-message');

				if (minRequired > 0 && $(el).find('input:checkbox:checked').length < minRequired) {
					if (!$ul.hasClass('missing-required')) {
						$ul.addClass('missing-required');
						$ul.data('original-border', $(el).css('border'));
						$ul.data('original-border-radius', $(el).css('border-radius'));
						$ul.data('original-padding', $(el).css('padding'));
						$ul.css('border', '1px solid red');
						$ul.css('border-radius', '3px');
						$ul.css('padding', '0 5px');
						$message.data('original-color', $message.css('color'));
						$message.css('color', 'red');
					}
					missingRequired = true;
					if (!$firstMissingEl) {
						$firstMissingEl = $(el);
					}
				} else if (minRequired > 0 && $(el).find('input:checkbox:checked').length >= minRequired && $ul.hasClass('missing-required')) {
					$message.css('color', $message.data('original-color'));
					$ul.css('border-radius', $ul.data('original-border-radius'));
					$ul.css('border', $ul.data('original-border'));
					$ul.css('padding', $ul.data('original-padding'));
					$ul.removeClass('missing-required');
				}
			});

			if ($firstMissingEl && $firstMissingEl.length > 0 && typeof($firstMissingEl[0].scrollIntoViewIfNeeded) != 'undefined') {
				$firstMissingEl[0].scrollIntoViewIfNeeded();
			}

			return missingRequired;
		};
	}

	if (typeof shopstorm.apps.productCustomizer.updateCartPricingItemsQuantities == 'undefined') {
		shopstorm.apps.productCustomizer.updateCartPricingItemsQuantities = function($form) {
			var $customizedItemRows = $form.find('[data-product-customizer-pricing-ref][data-product-customizer-pricing-qty]');

			$.each($customizedItemRows, function(index, row) {
				var pricingRef = $(row).data('product-customizer-pricing-ref');
				var itemQuantity = $(row).find('[name="updates[]"]').val();
				var pricingItemQuantity = $(row).data('product-customizer-pricing-qty');
				var $pricingItemRow = $(row).siblings('[data-product-customizer-pricing-ref=' + pricingRef + ']:not([data-product-customizer-pricing-qty])');
				if ($pricingItemRow.length > 0 && parseInt(itemQuantity) == itemQuantity) {
					$pricingItemRow.find('[name="updates[]"]').val(itemQuantity * pricingItemQuantity);
				}
			});
		};
	}

	if (typeof shopstorm.apps.productCustomizer.changeCartPricingItemQuantity == 'undefined') {
		shopstorm.apps.productCustomizer.changeCartPricingItemQuantity = function($customizedItemRow, quantity, callback) {
			quantity = typeof(quantity) === 'undefined' ? $customizedItemRow.find('[name="updates[]"]').val() : quantity;

			var lineNumber = $customizedItemRow.data('line');
			var pricingRef = $customizedItemRow.data('product-customizer-pricing-ref');
			var pricingItemQuantity = $customizedItemRow.data('product-customizer-pricing-qty');
			var $pricingItemRow = $customizedItemRow.siblings('[data-product-customizer-pricing-ref=' + pricingRef + ']:not([data-product-customizer-pricing-qty])');

			if ($pricingItemRow.length > 0 && parseInt(quantity) == quantity) {
				// update our associated pricing item row
				var pricingItemLineNumber = $pricingItemRow.data('line');
				$.ajax({
					method: 'GET',
					url: '/cart/change?line=' + pricingItemLineNumber + '&quantity=' + (quantity * pricingItemQuantity),
					async: typeof(callback) !== 'undefined'
				}).always(function() {
					if (typeof(callback) !== 'undefined') {
						if (pricingItemLineNumber < lineNumber && quantity == 0) {
							// if the pricing item was above the main product and has now been
							// removed, we need to decrement the main product line number by 1
							lineNumber--;
						}
						callback(lineNumber);
					}
				});
			} else {
				if (typeof(callback) !== 'undefined') {
					callback(lineNumber);
				}
			}
		};
	}

	if (typeof shopstorm.apps.productCustomizer.bindCartRemove == 'undefined') {
		// cartElSelector - String the cart element selector. Typically something like 'form[action="/cart"]'
		//   though it might be something else for a "quick cart"
		shopstorm.apps.productCustomizer.bindCartRemove = function(cartElSelector, callback) {
			if (typeof(cartElSelector) != 'string') {
				cartElSelector = cartElSelector.join(' .product-customizer-cart-remove, ');
			}
			cartElSelector = cartElSelector + ' .product-customizer-cart-remove';
			$(document).on('click', cartElSelector, function(event) {
				var $customizedItemRow = $(this).closest('[data-product-customizer-pricing-ref][data-product-customizer-pricing-qty]');
				if ($customizedItemRow.length > 0) {
					shopstorm.apps.productCustomizer.changeCartPricingItemQuantity($customizedItemRow, 0, callback);
					return false;
				}
			});
		};
	}

	if (typeof shopstorm.apps.productCustomizer.hidePricingItemRowHelper == 'undefined') {
		shopstorm.apps.productCustomizer.hidePricingItemRowHelper = function(item) {
			var style = '';
			if (item.properties && item.properties._pc_pricing_ref && typeof(item.properties._pc_pricing_qty) == 'undefined') {
				style = 'display: none;';
			}
			return style;
		};
	}

	if (typeof shopstorm.apps.productCustomizer.cartRowDataHelper == 'undefined') {
		shopstorm.apps.productCustomizer.cartRowDataHelper = function(item, line) {
			var cartRowData = ' data-line="' + line + '"';
			if (item.properties && item.properties._pc_pricing_ref) {
				cartRowData += ' data-product-customizer-pricing-ref="' + item.properties._pc_pricing_ref + '"';
			}
			if (item.properties && item.properties._pc_pricing_qty) {
				cartRowData += ' data-product-customizer-pricing-qty="' + item.properties._pc_pricing_qty + '"';
			}
			return cartRowData;
		};
	}

	if (typeof shopstorm.apps.productCustomizer.lineItemPropertiesHelper == 'undefined') {
		shopstorm.apps.productCustomizer.lineItemPropertiesHelper = function(item, brPlacement) {
			brPlacement = brPlacement || 'before';
			var pieces = [];
			var hiddenProps = '';
			if (item.properties) {
				$.each(item.properties, function(key, val) {
					var fragment = '';
					if (!val) {
						return true;
					}
					if (key.charAt(0) == '_') {
						hiddenProps += '<span style="display: none;" class="product-customizer-line-item-prop" data-prop-name="' + key + '">' + key + ': ' + val + '</span>';
						return true;
					}
					fragment = '<span class="product-customizer-line-item-prop" data-prop-name="' + key + '">' + key + ': ';
					if (val.indexOf('/uploads/') > -1) {
						fragment += '<a href="' + val + '">Click to see</a>';
					} else {
						fragment += val.replace(/\n/g, '<br/>');
					}
					fragment += '</span>';
					pieces.push(fragment);
				});
			}
			return (brPlacement == 'before' ? '<br/>' : '') + pieces.join('<br/>') + (brPlacement == 'after' ? '<br/>' : '') + hiddenProps;
		};
	}

	if (typeof shopstorm.apps.productCustomizer.removeFromCartHrefHelper == 'undefined') {
		shopstorm.apps.productCustomizer.removeFromCartHrefHelper = function(item, line, fallback) {
			fallback = fallback || '/cart/change?line=' + line + '&amp;quantity=0';
			if (item.properties && item.properties._pc_pricing_ref && item.properties._pc_pricing_qty) {
				return '#' + line;
			} else {
				return fallback;
			}
		};
	}

	if (typeof shopstorm.apps.productCustomizer.removeFromCartClassHelper == 'undefined') {
		shopstorm.apps.productCustomizer.removeFromCartClassHelper = function(item, elseClass) {
			elseClass = elseClass || '';
			if (item.properties && item.properties._pc_pricing_ref && item.properties._pc_pricing_qty) {
				return 'product-customizer-cart-remove';
			} else {
				return elseClass;
			}
		};
	}

	if (typeof shopstorm.apps.productCustomizer.itemLinePriceHelper == 'undefined') {
		shopstorm.apps.productCustomizer.itemLinePriceHelper = function(items, item) {
			var itemPrice = item.line_price;
			if (item.properties && item.properties._pc_pricing_ref && item.properties._pc_pricing_qty) {
				$.each(items, function(i, otherItem) {
					if (otherItem.properties && typeof(otherItem.properties._pc_pricing_qty) == 'undefined' && otherItem.properties._pc_pricing_ref == item.properties._pc_pricing_ref) {
						itemPrice += parseInt(otherItem.line_price);
						return false;
					}
				});
			}
			return itemPrice;
		};
	}

	if (typeof shopstorm.apps.productCustomizer.itemPriceHelper == 'undefined') {
		shopstorm.apps.productCustomizer.itemPriceHelper = function(items, item) {
			var itemPrice = item.price;
			if (item.properties && item.properties._pc_pricing_ref && item.properties._pc_pricing_qty) {
				$.each(items, function(i, otherItem) {
					if (otherItem.properties && typeof(otherItem.properties._pc_pricing_qty) == 'undefined' && otherItem.properties._pc_pricing_ref == item.properties._pc_pricing_ref) {
						itemPrice += parseInt(item.properties._pc_pricing_qty) * parseInt(otherItem.price);
						return false;
					}
				});
			}
			return itemPrice;
		};
	}

	if (typeof shopstorm.apps.productCustomizer.cartItemCountHelper == 'undefined') {
		shopstorm.apps.productCustomizer.cartItemCountHelper = function(cart) {
			var cartItemCount = cart.item_count;
			$.each(cart.items, function(i, item) {
				if (item.properties && item.properties._pc_pricing_ref && typeof(item.properties._pc_pricing_qty) == 'undefined') {
					cartItemCount -= parseInt(item.quantity);
				}
			});
			return cartItemCount;
		};
	}

	if (typeof shopstorm.apps.productCustomizer.doSubmit == 'undefined') {
		shopstorm.apps.productCustomizer.doSubmit = function doSubmit(form) {
			var form = $(document).find('form[action="/cart"');

			if (form.onsubmit) {
				var result = form.onsubmit.call(form);
			}

			if (result !== false) {
				form.submit();
			}
		}
	}

	// Use this when binding/unbinding/triggering events
	if (typeof shopstorm.apps.productCustomizer.getWindowJQuery == 'undefined') {
		shopstorm.apps.productCustomizer.getWindowJQuery = function() {
			return window.jQuery || $;
		};
	}

	if (typeof shopstorm.apps.productCustomizer.formatMoney == 'undefined') {
		shopstorm.apps.productCustomizer.formatMoney = function(cents, format) {
			// use the official version if available
			if (typeof Shopify.formatMoney != 'undefined') {
				return Shopify.formatMoney(cents, format);
			}

			var value = '',
				placeholderRegex = /\{\{\s*(\w+)\s*\}\}/,
				formatString = (format || "${{amount}}");

			if (typeof cents == 'string') {
				cents = cents.replace('.', '');
			}

			function defaultOption(opt, def) {
				return (typeof opt == 'undefined' ? def : opt);
			}

			function formatWithDelimiters(number, precision, thousands, decimal) {
				precision = defaultOption(precision, 2);
				thousands = defaultOption(thousands, ',');
				decimal = defaultOption(decimal, '.');

				if (isNaN(number) || number == null) {
					return 0;
				}

				number = (number / 100.0).toFixed(precision);

				var parts = number.split('.'),
					dollars = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands),
					cents = parts[1] ? (decimal + parts[1]) : '';

				return dollars + cents;
			}

			switch (formatString.match(placeholderRegex)[1]) {
				case 'amount':
					value = formatWithDelimiters(cents, 2);
					break;
				case 'amount_no_decimals':
					value = formatWithDelimiters(cents, 0);
					break;
				case 'amount_with_comma_separator':
					value = formatWithDelimiters(cents, 2, '.', ',');
					break;
				case 'amount_no_decimals_with_comma_separator':
					value = formatWithDelimiters(cents, 0, '.', ',');
					break;
			}

			return formatString.replace(placeholderRegex, value);
		};
	}

	if (typeof window.shopstorm.apps.productCustomizer.options == 'undefined' ||
		$.isArray(window.shopstorm.apps.productCustomizer.options)) {

		// setup option handler

		var optionsHandler = {
			// Process a product and its options
			push: function(val) {
				var productId = val.id;
				var $optionsContainer = $('.product-customizer-options[data-product-id="' + productId + '"]');
				var optionsData = val.data;
				this.productOptions = this.productOptions || {};
				this.productTitles = this.productTitles || {};
				this.discount = val.discount || 0;

				// ensure we only process this element once. we do this via element data
				// so that in the event of a "Quick View" we will setup the element each
				// time it's needed
				if ($optionsContainer.data('product-options-loaded')) {
					return;
				}
				// mark the options as loaded. Note: for some unknown reason we need to
				// set this with 'attr' as setting with 'data' at this point won't "take"
				$optionsContainer.attr('data-product-options-loaded', true);

				// Parse each option's data, push it into an array, then sort it by v4
				// position (if position available) or v3 metafield key.
				optionsData = (function(rawProductOptionsData) {
					var parsedOptionsData = [],
						fieldKey, fieldData;

					// console.log(`================================= rawProductOptionsData= ${rawProductOptionsData} ----------`)

					for (fieldKey in rawProductOptionsData) {
						//console.log(`---------------------------------- fieldKey = ${fieldKey} ----------`)
						//console.log(`---------------------------------- rawProductOptionsData[fieldKey] = ${rawProductOptionsData[fieldKey]} ----------`)
						fieldData = $.parseJSON(rawProductOptionsData[fieldKey]);
						// console.log(`---------------------------------- fieldData = ${fieldData} ----------`)
						fieldData.fieldKey = fieldKey;
						parsedOptionsData.push(fieldData);
					}
					return parsedOptionsData.sort(function(a, b) {
						var sortProp = 'position';
						if (!a.hasOwnProperty(sortProp)) {
							sortProp = 'fieldKey';
						}
						if (a[sortProp] < b[sortProp]) return -1;
						if (a[sortProp] > b[sortProp]) return 1;
						return 0;
					});
				})(optionsData)

				this.productOptions[productId] = optionsData;
				this.productTitles[productId] = val.title;

				// nothing to process?
				if ($optionsContainer.length == 0) {
					return;
				}

				var $form = $optionsContainer.closest('form[action="/cart/add"], form[action^="/cart/add?"]');

				$.each(optionsData, (function(_this) {
					return function(index, fieldData) {
						var $field, fieldKey, i;
						fieldKey = fieldData.fieldKey;
						i = index + 1;
						if ($optionsContainer.data('version') && shopstorm.apps.versionCompare($optionsContainer.data('version'), '1.6.3', '>')) {
							$field = $('#' + productId + '_option_' + i);
						} else {
							// up to liquid version 1.6.3, the metafield sort key was used in the option css id
							$field = $('#' + productId + '_option_' + fieldKey.split('_')[0]);
						}

						if (fieldData['price'] || fieldData['option_prices']) {
							if ($field.closest('.option-type-checkbox_group, .option-type-radio').length > 0) {
								// checkbox group/radio buttons: get the constituent inputs
								$field = $field.closest('.option-type-checkbox_group, .option-type-radio').find('input:checkbox, input:radio');
							}
							// handle option pricing
							if (shopstorm.apps.productCustomizer.pricingVariantId) {
								$field.on(
									'change input', {
										productId: productId
									},
									(function(_this) {
										return function(event) {
											_this.showOptionsCost(event.data.productId);
										};
									})(_this));
								$optionsContainer.attr('data-product-customizer-option-pricing', true);
							} else {
								console.warn('Shopify Product Customizer: dynamic pricing product variant id missing');
							}
						}
						i++;
					};
				})(this));

				// handle any default selected costs
				if ($optionsContainer.data('product-customizer-option-pricing') == true) {
					this.showOptionsCost(productId);
				}
				this.setupAddToCartFormHandlers(productId);
				this.initializeDeferredSetup();
			},

			// deferred setup unbinds/binds the add to cart form submit handlers
			// for the case of an early loaded product customizer script with
			// a theme that binds late
			initializeDeferredSetup: function() {
				if (shopstorm.apps.productCustomizer.deferredSetupInitialized) {
					return;
				}

				shopstorm.apps.productCustomizer.deferredSetupInitialized = true;

				$(window).on('load', (function(_this) {
					return function() {
						$.each(_this.productOptions, function(productId, optionsData) {
							_this.setupAddToCartFormHandlers(productId);
						});
					};
				})(this));

				// e.g: launchpad
				$(window.document).ready((function(_this) {
					return function() {
						$.each(_this.productOptions, function(productId, optionsData) {
							_this.setupAddToCartFormHandlers(productId);
						});
					};
				})(this));
			},

			setupAddToCartFormHandlers: function(productId) {
				// var formId = '#product_form_' + productId;
				// console.log(formId);
				// var $cartForm = $('#product_form_' + productId);
				// console.log($cartForm.length);
				// setTimeout(function() {
				//   $cartForm.on('submit', function() { console.log('yeh yeh'); return false; })
				// }, 1000);
				this.handleFileUploadFields(productId);

				this.enforceRequiredFields(productId);

				this.setupOptionPricing(productId);
				// allow custom form handlers to be added
				$('.product-customizer-options[data-product-id="' + productId + '"]')
					.trigger('product-customizer-add-to-cart-form-handlers-setup');
				if ($ != shopstorm.apps.productCustomizer.getWindowJQuery()) {
					shopstorm.apps.productCustomizer.getWindowJQuery()('.product-customizer-options[data-product-id="' + productId + '"]')
						.trigger('product-customizer-add-to-cart-form-handlers-setup');
				}
			},

			handleFileUploadFields: function(productId) {
				var $form = $('.product-customizer-options[data-product-id="' + productId + '"]').closest('form[action="/cart/add"], form[action^="/cart/add?"]');

				if ($form.find('input:file').length > 0) {
					// try to make file upload fields work better
					$form.attr('enctype', 'multipart/form-data');

					if (!shopstorm.apps.productCustomizer.noHandleFileUploadFields) {
						$form.addClass('noAJAX');
						this.unbindProductFormHandlers(productId);
					}
				}
			},

			// Enforce validation of checkbox groups with a required minimum number of checked boxes for all browsers.
			// Enforce validation of input fields with required attributes for browsers that do not support form validation.
			enforceRequiredFields: function(productId, always) {
				always = always || false;
				var $form = $('.product-customizer-options[data-product-id="' + productId + '"]').closest('form[action="/cart/add"], form[action*="/cart/add?"]');
				//console.log($form, always);
				// no required fields, visible or otherwise?
				if (!always && $form.find('[name^=properties][required]').length == 0 && $form.find('.option-type-checkbox_group[data-min-selections]').length == 0) {
					return;
				}

				if (!shopstorm.apps.productCustomizer.skipRequiredFieldsUnbind) {
					this.unbindProductFormHandlers(productId);
				}

				// so long as the browser supports input[required] and formvalidation natively, and there are no checkbox group
				//  minimum selection counts, we can rely on the browser to enforce
				//  required fields
				if (!always && $form.find('.option-type-checkbox_group[data-min-selections]').length == 0) {
					return;
				}

				var $eventForm = this.getProductFormForEvents(productId);
				if (typeof($eventForm.on) !== 'undefined') {
					$eventForm.on('submit', {
						productId: productId
					}, function(event) {
						if (shopstorm.apps.productCustomizer.formMarkMissingRequired(this)) {
							return false;
						}
					});
				} else {
					$eventForm.bind('submit', {
						productId: productId
					}, function(event) {
						if (shopstorm.apps.productCustomizer.formMarkMissingRequired(this)) {
							return false;
						}
					});
				}
			},

			showOptionsCost: function(productId) {
				var optionsCost = shopstorm.apps.productCustomizer.sumOptionsCost(productId);
				var $optionsContainer = $('.product-customizer-options[data-product-id=' + productId + ']');

				// hook into this to dynamically update the main product price
				$('.product-customizer-options[data-product-id="' + productId + '"]').
				trigger('product-customizer-show-options-cost', optionsCost);
				if ($ != shopstorm.apps.productCustomizer.getWindowJQuery()) {
					shopstorm.apps.productCustomizer.getWindowJQuery()('.product-customizer-options[data-product-id="' + productId + '"]').
					trigger('product-customizer-show-options-cost', optionsCost);
				}

				var $optionsTotalAmount = $optionsContainer.find('.customizations-total span');
				if ($optionsTotalAmount.length == 0) {
					// in liquid version 1.6.2 the customizations-total p was moved outside of the product-customizer-options div
					$optionsTotalAmount = $('.product-customizer-customizations-total[data-product-id=' + productId + '] span');
				}
				if ($optionsTotalAmount.length > 0) {
					$optionsTotalAmount.html(shopstorm.apps.productCustomizer.formatMoney(optionsCost, shopstorm.shop.moneyFormat));
				}
			},

			setupOptionPricing: function(productId) {
				var $optionsContainer = $('.product-customizer-options[data-product-id="' + productId + '"]');

				// no option pricing
				if ($optionsContainer.data('product-customizer-option-pricing') != true) {
					return;
				}

				if (!shopstorm.apps.productCustomizer.noHandlePricingOptionsAddToCart) {

					this.unbindProductFormHandlers(productId);
					this.enforceRequiredFields(productId);

					var $form = this.getProductFormForEvents(productId);

					if (typeof($form.on) !== 'undefined') {
						$form.on('submit', {
							productId: productId
						}, function(event) {
							// console.log(`=========1 = event = ${event}`);
							// console.log(`=========1 = event.data = ${event.data}`);
							// console.log(`=========1 = event.data.productId = ${event.data.productId}`);
							try {
								const inputFields = document.querySelectorAll(`input[id^="${event.data.productId}_option_"][required="required"]`);
								inputFields.forEach(inputField => {
									if (inputField.value.trim() === '') {
										console.error(`Input field with ID ${inputField.id} is empty.`);
										inputField.value = null;
									}
								});
							} catch (e) {
								console.error(e);
							}

							return shopstorm.apps.productCustomizer.addOptionPricingItemToCart(event.data.productId);
						});
					} else {
						$form.bind('submit', {
							productId: productId
						}, function(event) {
							//console.log(`=========2 = event = ${event}`);
							return shopstorm.apps.productCustomizer.addOptionPricingItemToCart(event.data.productId);
						});
					}
				}
			},

			manualAddOptions: function() {
				var options = document.getElementsByClassName("product-customizer-options");
				if (options.length == 1) {
					shopstorm.apps.productCustomizer.addOptionPricingItemToCart(options[0].dataset['productId']);
				}
			},

			getProductFormForEvents: function(productId, jQuery) {
				jQuery = jQuery || shopstorm.apps.productCustomizer.getWindowJQuery();
				if (-1 == $.inArray(jQuery, window.shopstorm.apps.productCustomizer.jQueries)) {
					window.shopstorm.apps.productCustomizer.jQueries.push(jQuery);
				}
				return jQuery('.product-customizer-options[data-product-id="' + productId + '"]').closest('form');
			},

			unbindProductFormHandlers: function(productId) {
				// first ensure that the page jquery is included in our collection
				this.getProductFormForEvents(productId);

				// then unbind the events
				var getProductFormForEvents = this.getProductFormForEvents;
				$.each(window.shopstorm.apps.productCustomizer.jQueries, function(index, jQuery) {
					$form = getProductFormForEvents(productId, jQuery);
					if (typeof($form.off) !== 'undefined') {
						$form.off();
						$form.find(shopstorm.apps.productCustomizer.productFormAddToCartSelector || ':submit').prop('onclick', null).off();
					} else {
						$form.unbind();
						$form.find(shopstorm.apps.productCustomizer.productFormAddToCartSelector || ':submit').attr('onclick', '').unbind();
					}
				});

				// trigger on both our javascript, as well as the page javascript as needed
				$('.product-customizer-options[data-product-id="' + productId + '"]')
					.trigger('product-customizer-unbind-product-form-handlers');
				if ($ != shopstorm.apps.productCustomizer.getWindowJQuery()) {
					shopstorm.apps.productCustomizer.getWindowJQuery()('.product-customizer-options[data-product-id="' + productId + '"]')
						.trigger('product-customizer-unbind-product-form-handlers');
				}
			},
		};
	}

	if(!shopstorm.apps.productCustomizer.eventHandlersOnlineStatus){
		shopstorm.apps.productCustomizer.eventHandlersOnlineStatus = 1;

		function registerDomHandlers(){
			// example usage: $(document).on('product-customizer-script-loaded', function() { ... });
			shopstorm.apps.productCustomizer.triggeredProductCustomizerScriptLoaded = true;

			$(document).trigger('product-customizer-script-loaded');
			if ($ != shopstorm.apps.productCustomizer.getWindowJQuery()) {
				shopstorm.apps.productCustomizer.getWindowJQuery()(document).trigger('product-customizer-script-loaded');
			}

			// Bind ConditionalLogic.init, if available, to execute when DOM is loaded.
			var ConditionalLogic = window.shopstorm.ConditionalLogic;
			if(!ConditionalLogic.$) window.shopstorm.ConditionalLogic.$ = window.pc$;
			
			if (ConditionalLogic && ConditionalLogic.init) {
				$(ConditionalLogic.init);
			}
			else console.warn("Product Customizer: Conditional Logic Module missing");
		}

		function registerFormHandlers(){
			shopstorm.apps.productCustomizer.cartFormInitialized = true;

			// setup cart handler: loop in case there's multiple cart forms present (e.g. main cart and "quick cart")
			$.each($('form[action="/cart"], form[action^="/cart?"]'), function(_index, form) {

				var $form = $(form);

				// ensure we only process this element once.
				if ($form.data('product-options-initialized')) {
					return true;
				}
				// mark the cart form as initialized. Note: for some unknown reason we need to
				// set this with 'attr' as setting with 'data' at this point won't "take"
				$form.attr('data-product-options-initialized', true);

				// Display the additional cost next to the line item customizations, e.g. "Color: red (+ $1.00)"
				$.each($form.find('[data-product-customizer-pricing-ref]:not([data-product-customizer-pricing-qty])'), function(_index, pricingItemRow) {
					var pricingRef = $(pricingItemRow).data('product-customizer-pricing-ref');
					var $itemRow = $form.find('[data-product-customizer-pricing-ref=' + pricingRef + '][data-product-customizer-pricing-qty]');
					$.each($(pricingItemRow).find('[data-prop-name]'), function(_index, pricingLineItemProp) {
						var $mainLineItemProp = $itemRow.find('[data-prop-name="' + $(pricingLineItemProp).data('prop-name').replace(/^_/, '') + '"]');
						if ($mainLineItemProp.length > 0 &&
							$mainLineItemProp.text() != $(pricingLineItemProp).text() &&
							$mainLineItemProp.find('.option-amount').length == 0 &&
							(match = $(pricingLineItemProp).text().trim().match(/\((\d+)\)$/)) &&
							match[1] > 0) {
							$mainLineItemProp.html($mainLineItemProp.html() + '<span class="option-amount">(+ ' + shopstorm.apps.productCustomizer.formatMoney(match[1], shopstorm.shop.moneyFormat) + ')</span>');
						}
					});
				});
			});

			// add cart event handlers on the document so that in the case of an ajax
			// refresh of the cart, our handlers continue to be fired

			// submit cart form handler: update the quantities of any pricing items
			// based on the final quantity of the associated customized item
			$(document).on('submit', 'form[action="/cart"], form[action^="/cart?"]', function(event) {
				$(this).prop('data-doing-submit', true);
				shopstorm.apps.productCustomizer.updateCartPricingItemsQuantities($(this));
			});

			// remove item handler: remove the associated pricing item if a customized
			// item is removed
			shopstorm.apps.productCustomizer.bindCartRemove(
				['form[action="/cart"]', 'form[action^="/cart?"]'],
				function(lineNumber) {
					window.location.href = '/cart/change?line=' + lineNumber + '&quantity=0';
				}
			);

			// process recharge radio button changes
			$(document).on('change', '.rc_container input.rc_radio', $.proxy(function() {
				this.showOptionsCost(productId);
			}, this));
		}

		function registerSelectHandlers(){
			// process multiple select boxes
			$(document).on('change', '.product-customizer-options .option-type-select select[multiple]', function() {
				var $parent = $(this).closest('.option-type-select');
				var joinVal = $(this).val().join(', ');
				var $hidden = $parent.find('input:hidden');
				if ($hidden.length == 0) {
					// note: this part could (should?) be done in liquid like the checkbox group
					$hidden = $('<input type="hidden" name="' + $(this).attr('name') + '" value="" />').appendTo($parent);
					$(this).attr('name', null);
				}
				$hidden.val(joinVal);
			});
		}

		function registerCheckboxGroupHandlers(){
			// process checkbox groups
			$(document).on('change', '.product-customizer-options .option-type-checkbox_group input:checkbox', function() {
				var $parent = $(this).closest('.option-type-checkbox_group');
				var joinVal = $.makeArray($parent.find('input:checkbox:checked').map(function(_i, el) {
					return $(el).val();
				})).join(', ');

				if ($parent.data('max-selections')) {
					if ($parent.find('input:checkbox:checked').length == $parent.data('max-selections')) {
						$parent.find('input:checkbox:not(:checked)').prop('disabled', true).siblings('label').addClass('disabled');
					} else {
						$parent.find('input:checkbox:not(:checked)').prop('disabled', false).siblings('label').removeClass('disabled');
					}
				}

				$parent.find('input:hidden').val(joinVal);
			});
		}

		function registerFileHandlers(){
			$(document).on('change', ".product-customizer-option input[type='file']", function() {
				input = this;
	
				if (input.files && input.files[0] && input.files[0].type.includes("image")) {
					var reader = new FileReader();
	
					reader.onload = function(e) {
						var img = $("#" + input.id + "_preview");
						if (img.length == 0) {
							var img = $('<img />', {
								id: input.id + "_preview",
								src: e.target.result,
								class: "product-customizer-preview"
							});
	
							img.appendTo($(input).parent());
						} else {
							img.attr('src', e.target.result);
						}
	
						//callback
						if (typeof(window.productCustomizerCallbacks.previewImage) === 'function') {
							window.productCustomizerCallbacks.previewImage(input.id, img);
						}
					};
	
					reader.readAsDataURL(input.files[0]);
	
				} else {
					$("#" + input.id + "_preview").remove();
				}
			});
		}

		function registerSwatchHandlers(){
			$(document).off("click.swatchTrigger");
			$(document).on("click.swatchTrigger", ".product-customizer-swatch__trigger", function(event) {
				$('.product-customizer-swatch-container.open').not(event.currentTarget.parentElement).toggleClass('open');
				event.currentTarget.parentElement.classList.toggle('open');
				event.stopPropagation();
			});

			$(document).off("click.swatch");
			$(document).on("click.swatch", ".product-customizer-swatch", function(event) {
				$(event.currentTarget).parent().find('.product-customizer-swatch.selected').toggleClass('selected');
				//Hide List
				event.currentTarget.parentElement.parentElement.classList.toggle('open');
				event.currentTarget.classList.toggle('selected');

				//Set Value
				document.getElementById(event.currentTarget.dataset.id).value = event.currentTarget.dataset.value;
				event.currentTarget.parentElement.parentElement.querySelector(".product-customizer-selected-swatch").innerHTML = event.currentTarget.innerHTML;

				//callback
				if (typeof(window.productCustomizerCallbacks.swatchSelected) === 'function') {
					window.productCustomizerCallbacks.swatchSelected(event.currentTarget.dataset.id, event.currentTarget.dataset.value);
				}

				// Conditional Logic
				shopstorm.ConditionalLogic.runAll()

				//Sum Up
				var id = document.getElementsByClassName("product-customizer-options")[0].dataset.productId;
				window.shopstorm.apps.productCustomizer.options.showOptionsCost(id);

				event.stopPropagation();
			});

			$(window).click(function(e) {
				if($(e.target).parents(".product-customizer-option.option-type-swatch").length) return;
				$('.product-customizer-swatch-container.open').toggleClass('open');
			});
		}

		function registerUpswatchHandlers(){
			// process upswatches
			$(document).on('change', '.product-customizer-upswatch-wrapper input[type="radio"]', function() {
				var id = document.getElementsByClassName("product-customizer-options")[0].dataset.productId;
				window.shopstorm.apps.productCustomizer.options.showOptionsCost(id);
			});
		}

		function registerFontHandlers(){
			shopstorm.apps.productCustomizer.fontsLoaded = {};
			$(".product-customizer-option.option-type-font .font").each(function(){
					$fontsLoaded = shopstorm.apps.productCustomizer.fontsLoaded;
					$font = $(this).find(".value").attr("value");
					$fontUrl = $font.replace(/ /g,"+");
					if($fontsLoaded[$font]) return;
					
					$("body").append("<link href='https://fonts.googleapis.com/css?family="+$fontUrl+"' rel='stylesheet'>");
					$fontsLoaded[$font] = true;
			});

			$(document).on("click.selectedFont",".product-customizer-option.option-type-font .selected-font",function(e){
					$selectedFont = $(e.currentTarget);
					$fontsList = $(e.currentTarget).siblings(".fonts-list");
					
					$selectedFont.toggleClass("opened");
					$fontsList.css("width",$selectedFont.outerWidth());
					$fontsList.toggleClass("product-customizer-hidden");
			});

			$(document).on("click.font",".product-customizer-option.option-type-font .fonts-list .font",function(e){
					$font = $(e.currentTarget);
					$fontValue = $font.find(".value").attr("value").trim();
					$fontsList = $font.parents(".fonts-list");
					$font.siblings(".font").removeClass("selected");
					$font.addClass("selected");
					
					$fontsList.siblings(".selected-font").find(".selected-font-content span").text($fontValue);
					$fontsList.siblings(".selected-font-value").val($fontValue).attr("selectedIndex",$font.index());
					$fontsList.siblings(".selected-font").removeClass("opened");
					$fontsList.addClass("product-customizer-hidden");
					
					shopstorm.ConditionalLogic.runAll();
					
					var id = document.getElementsByClassName("product-customizer-options")[0].dataset.productId;
			window.shopstorm.apps.productCustomizer.options.showOptionsCost(id);
			});
					
			$(window).click(function(e) {
				if($(e.target).parents(".product-customizer-option.option-type-font").length) return;
				$('.product-customizer-option.option-type-font .selected-font.opened').removeClass('opened');
				$('.product-customizer-option.option-type-font .fonts-list').addClass('product-customizer-hidden');
			});
		}

		function registerOptionHandlers(){
			// initialize options handler
			if (typeof window.shopstorm.apps.productCustomizer.options == 'undefined') {
				// no existing options to process
				window.shopstorm.apps.productCustomizer.options = optionsHandler;
			} else if ($.isArray(window.shopstorm.apps.productCustomizer.options)) {
				// existing options to process
				var options = window.shopstorm.apps.productCustomizer.options;
				window.shopstorm.apps.productCustomizer.options = optionsHandler;
				$.each(options, function(_i, val) {
					optionsHandler.push(val);
				});
			}

			registerSelectHandlers();
			registerCheckboxGroupHandlers();
			//registerFileHandlers();
			registerSwatchHandlers();
			registerUpswatchHandlers();
			registerFontHandlers();
		}
		
		function registerEventHandlers(){
			registerDomHandlers();
			registerFormHandlers();
			registerOptionHandlers();
		}

		shopstorm.apps.productCustomizer.initEventHandlers = function(force){
			if(!force && shopstorm.apps.productCustomizer.eventHandlersOnlineStatus == 2) return;
			registerEventHandlers();

			shopstorm.apps.productCustomizer.eventHandlersOnlineStatus = 2;
		};

		shopstorm.apps.productCustomizer.initEventHandlers();
	}

	//Loaded Callback
	if (typeof(window.productCustomizerLoaded) === 'function') {
		window.productCustomizerCallbackLoaded();
	}
});
window.__asw_root = "https://app.productcustomizer.com";



