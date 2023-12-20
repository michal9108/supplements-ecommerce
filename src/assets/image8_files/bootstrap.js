window.typ = {
    assetPath: "https://s3.amazonaws.com/yo-apps/thank-you-page/b36983c792ee262ef787319477d87676",
    clientId: "b36983c792ee262ef787319477d87676",
    appUrl: "https://thank-you-page.yopify.com",
    isThankYouPage: function()
    {
        return typeof Shopify !== "undefined" && Shopify && Shopify.Checkout && ("thank_you" === Shopify.Checkout.page || (typeof Shopify.Checkout.OrderStatus !== "undefined" && typeof Shopify.Checkout.OrderStatus.addContentBox === "function"));
    },
    ensurejQuery: function( e )
    {
        window.jQuery === void 0 || - 1 === typ.versionCompare( window.jQuery.fn.jquery, 1.7 ) ? this.attachResource( "js", "//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js", function()
        {
            $ = window.jQuery.noConflict( ! 0 ), typ.jQuery = $, e()
        } ) : ($ = window.jQuery, e())
    },
    getParameters: function( x, v, y )
    {
        var m = null;
        x = x.replace( /^https?:\/\//, '' );

        if( v === "youtube" )
        {
            m = x.substr( x.indexOf( "=" ) + 1 );
        }
        else
        {
            m = x.substr( x.indexOf( "/" ) + 1 );
        }

        return m;
    },
    attachResource: function( x, y, z )
    {
        x = x || "js";
        var p = document.createElement( "css" === x ? "link" : "script" );
        p.type = "css" === x ? "text/css" : "text/javascript", "css" === x && (p.rel = "stylesheet"), p.readyState ? p.onreadystatechange = function()
        {
            ("loaded" === p.readyState || "complete" === p.readyState) && (p.onreadystatechange = null, z())
        } : p.onload = function()
        {
            z()
        }, "css" === x ? p.href = y : p.src = y, document.getElementsByTagName( "head" )[0].appendChild( p )
    },
    isIframe: function()
    {
        try
        {
            return window.self !== window.top
        }
        catch( e )
        {
            return ! 0
        }
    },
    setup: function()
    {
        this.isThankYouPage() && this.ensurejQuery( function()
        {
            typ.beforeSetup();

            if( typeof typPreviewPage === "undefined" || typPreviewPage === false )
            {
                $.getJSON( typ.assetPath + '/settings.js?callback=?&t=' + Math.ceil( (new Date).getTime() ), function( response )
                {

                } );
            }
        } );

    },
    typSettings: function( settings )
    {
        typ.settings = settings;

        if( settings )
        {
            typ.settings.css && $( "head" ).append( '<style type="text/css" id="typ-css">' + typ.settings.css + "</style>" );
            typ.setupWidgets();
        }
    },
    beforeSetup: function()
    {
        this.sectionContent = $( '.main__content .section .section__content .content-box' ).closest( '.section__content' );
        this.sidebarContent = $( '.sidebar__content' );
        var $widgetH = this.sectionContent.find( '.content-box:first-child' );
        $widgetH.addClass( 'typ-widget widget_H' );
        var $widgetI = this.sectionContent.find( '.content-box:last-child' );
        $widgetI.addClass( 'typ-widget widget_I' );

        // Create currency format
        var $shopifyPriceHolder = $( '.total-line__price.payment-due .payment-due__price' );
        var $shopifyOrderPriceTotal = $shopifyPriceHolder.data( 'checkout-payment-due-target' );
        $shopifyOrderPriceTotal = typeof $shopifyOrderPriceTotal !== "undefined" ? ($shopifyOrderPriceTotal / 100).toFixed( 2 ) : 0;
        $shopifyOrderPriceTotal = (! isNaN( $shopifyOrderPriceTotal )) && typeof $shopifyOrderPriceTotal !== "undefined" ? $shopifyOrderPriceTotal : 0;
        var $shopifyOrderPriceText = $shopifyPriceHolder.text();
        $shopifyOrderPriceText = $shopifyOrderPriceText ? $shopifyOrderPriceText.trim() : '';
        $shopifyOrderPriceText = $shopifyOrderPriceText.replace( ',', '' );
        var $shopMoneyFormat = $shopifyOrderPriceTotal && typeof $shopifyOrderPriceText !== "undefined" ? $shopifyOrderPriceText.replace( $shopifyOrderPriceTotal, '[PRICE]' ) : '';

        if( $shopMoneyFormat && $shopifyOrderPriceText !== $shopMoneyFormat )
        {
            this.shopMoneyFormat = $shopMoneyFormat;
        }
    }, format_money: function( price, money_format )
    {
        if( typeof price !== "undefined" && price )
        {
            function getValidValue( value1, value2 )
            {
                return "undefined" === typeof value1 ? value2 : value1
            }

            function number_format( price, decimals, separator, decimalPoint )
            {
                if( decimals = getValidValue( decimals, 2 ), separator = getValidValue( separator, "," ), decimalPoint = getValidValue( decimalPoint, "." ), isNaN( price ) || null === price )
                {
                    return 0;
                }
                price = (price / 100).toFixed( decimals );
                var priceArray = price.split( "." );
                var pricePart1 = priceArray[0].replace( /(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + separator );
                var pricePart2 = priceArray[1] ? decimalPoint + priceArray[1] : "";
                return pricePart1 + pricePart2;
            }

            "string" === typeof price && (price = price.replace( ".", "" ));
            var amount = "";
            var regex = /\{\{\s*(\w+)\s*\}\}/;
            money_format = money_format || '$' + '@{{amount}}';

            try
            {
                switch( money_format.match( regex )[1] )
                {
                    case"amount":
                        amount = number_format( price, 2 );
                        break;
                    case"amount_no_decimals":
                        amount = number_format( price, 0 );
                        break;
                    case"amount_with_comma_separator":
                        amount = number_format( price, 2, ".", "," );
                        break;
                    case"amount_with_space_separator":
                        amount = number_format( price, 2, " ", "," );
                        break;
                    case"amount_with_period_and_space_separator":
                        amount = number_format( price, 2, " ", "." );
                        break;
                    case"amount_no_decimals_with_comma_separator":
                        amount = number_format( price, 0, ".", "," );
                        break;
                    case"amount_no_decimals_with_space_separator":
                        amount = number_format( price, 0, " " );
                        break;
                    case"amount_with_apostrophe_separator":
                        amount = number_format( price, 2, "'", "." )
                }

                return money_format.replace( regex, amount )
            }
            catch( Error )
            {

            }
        }

        return price;
    },
    getRandom: function( array, n )
    {
        var final = [];
        array = array.filter( function( elem, index, self )
        {
            return index === self.indexOf( elem );
        } ).sort( function()
        {
            return 0.5 - Math.random()
        } );

        var len = array.length,
            n = n > len ? len : n;

        for( var i = 0; i < n; i ++ )
        {
            final[i] = array[i];
        }

        return final;
    },
    versionCompare: function( e, t )
    {
        if( "stringstring" !== typeof e + typeof t )
        {
            return ! 1;
        }
        for( var o = e.split( "." ), s = t.split( "." ), n = 0, i = Math.max( o.length, s.length ); i > n; n ++ )
        {
            if( o[n] && ! s[n] && parseInt( o[n] ) > 0 || parseInt( o[n] ) > parseInt( s[n] ) )
            {
                return 1;
            }
            if( s[n] && ! o[n] && parseInt( s[n] ) > 0 || parseInt( o[n] ) < parseInt( s[n] ) )
            {
                return - 1
            }
        }
        return 0
    },
    setupWidget: function( widget, side )
    {

        var t = this.settings.widgets[widget],
            o = $( "html" ).prop( "lang" ) || "en",
            s = o.split( "-" )[0];
        var settings = t;
        switch( widget )
        {

            case "a" :

                var social_html = '';

                this.attachResource( "css", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css", function()
                {
                } );

                if( t.social_facebook_url )
                {
                    social_html += '<li class="social-facebook-link"><a href="' + t.social_facebook_url + '" target="_blank"><i class="fa fa-facebook"></i></a></li> ';
                }

                if( t.social_twitter_url )
                {
                    social_html += '<li class="social-twitter-link"><a href="' + t.social_twitter_url + '" target="_blank"><i class="fa fa-twitter"></i></a></li> ';
                }

                if( t.social_instagram_url )
                {
                    social_html += '<li class="social-instagram-link"><a href="' + t.social_instagram_url + '" target="_blank"><i class="fa fa-instagram"></i></a></li> ';
                }

                if( t.social_pinterest_url )
                {
                    social_html += '<li class="social-pinterest-link"><a href="' + t.social_pinterest_url + '" target="_blank"><i class="fa fa-pinterest"></i></a></li> ';
                }

                if( t.social_gplus_url )
                {
                    social_html += '<li class="social-gplus-link"><a href="' + t.social_gplus_url + '" target="_blank"><i class="fa fa-google"></i></a></li> ';
                }

                if( t.social_youtube_url )
                {
                    social_html += '<li class="social-youtube-link"><a href="' + t.social_youtube_url + '" target="_blank"><i class="fa fa-youtube"></i></a></li> ';
                }

                if( t.social_tumblr_url )
                {
                    social_html += '<li class="social-tumblr-link"><a href="' + t.social_tumblr_url + '" target="_blank"><i class="fa fa-tumblr"></i></a></li> ';
                }

                if( t.social_linkedin_url )
                {
                    social_html += '<li class="social-linkedin-link"><a href="' + t.social_linkedin_url + '" target="_blank"><i class="fa fa-linkedin"></i></a></li> ';
                }

                if( social_html )
                {
                    var socialTitle = settings.social_title ? '<h2>' + settings.social_title + '</h2>' : '';
                    social_html = '<div class="social-links-holder social-icons ' + t.social_icon_type + '">' + socialTitle + '<ul>' + social_html + '</ul></div>';

                    $( ".typ-widget.widget_A" ).html( social_html );
                }

                break;

            case "b":

                if( t.video_service && t.video_id )
                {
                    var embedUrl = t.video_service === "youtube" ? "https://youtube.com/embed/" : "https://player.vimeo.com/video/";
                    var videoTitleHtml = settings.video_title ? '<h2>' + settings.video_title + '</h2>' : '';
                    var videoAutoPlay = ! ! (typeof settings.video_autoplay !== "undefined" && settings.video_autoplay);

                    var embedUrlQueryParams = {};

                    // For Youtube
                    if( t.video_service === "youtube" )
                    {
                        embedUrlQueryParams.rel = 0;
                    }

                    if( videoAutoPlay )
                    {
                        embedUrlQueryParams.autoplay = 1;
                    }

                    embedUrl = embedUrl + t.video_id + (Object.keys( embedUrlQueryParams ).length ? '?' + $.param( embedUrlQueryParams ) : '');

                    var videoHtml = '<div class="video-holder">' + videoTitleHtml + '<div class="iframe-holder"><iframe width="' + t.width + '" height="' + t.height + '" frameborder="0" src="' + embedUrl + '" allowfullscreen></iframe></div></div>';

                    $( ".typ-widget.widget_B" ).html( videoHtml );
                }

                break;

            /*case "c":

                if( t.access_token && ((t.instagram_feed_type === 'hashtag' && t.instagram_feed_hashtag) || (t.instagram_feed_type === 'user_id' && t.instagram_feed_user_id ) ) )
                {

                    var feedType = t.instagram_feed_type;

                    var instagramFeedTitleHtml = t.instagram_feed_title ? '<h2>' + t.instagram_feed_title + '</h2>' : '';
                    var widgetCHtml = instagramFeedTitleHtml + '<ul class="instagram-feed-holder"></ul>'

                    $( ".typ-widget.widget_C" ).html( widgetCHtml );

                    if( feedType === "hashtag" )
                    {
                        var url = 'https://api.instagram.com/v1/tags/' + t.instagram_feed_hashtag + '/media/recent/?access_token=' + t.access_token + '&count=' + t.count;
                    }
                    else
                    {
                        var url = 'https://api.instagram.com/v1/users/' + t.instagram_feed_user_id + '/media/recent/?access_token=' + t.access_token + '&count=' + t.count;
                    }

                    $.ajax( {
                        type: 'GET',
                        url: url,
                        dataType: 'jsonp',
                        jsonpCallback: 'typ.instagramPhotosCallback',

                    } );
                }

                break;*/

            case  "d" :

                var thankYouMessageTitleHtml = t.thankyou_message_title ? '<h1>' + t.thankyou_message_title + '</h1>' : '';
                var thankYouMessageContentHtml = t.thankyou_message_content ? '<div class="thank-you-message-content">' + t.thankyou_message_content + '</div>' : '';

                if( thankYouMessageTitleHtml || thankYouMessageContentHtml )
                {
                    var widgetDHtml = '<div class="thank-you-message-holder">' + thankYouMessageTitleHtml + thankYouMessageContentHtml + '</div>';
                    $( ".typ-widget.widget_D" ).html( widgetDHtml );
                }

                break;

            case "e":

                var callToActionButtons = t.call_to_action_buttons;

                var callToActionButtonsHtml = '';

                if( callToActionButtons )
                {
                    $.each( callToActionButtons, function( index, value )
                    {
                        if( typeof value.text !== "undefined" && value.text )
                        {
                            var buttonPosition = 'align-' + (typeof value.position !== "undefined" ? value.position : 'center');
                            var buttonType = 'button-' + (typeof value.type !== "undefined" ? value.type : 'square');
                            callToActionButtonsHtml += '<div class="single-button-holder ' + buttonPosition + '"><a href="' + (typeof value.url !== "undefined" && value.url ? value.url : 'javascript:void(0);') + '" class="' + buttonType + '" style="background-color:' + value['button-color'] + '; color:' + value['text-color'] + ';">' + value.text + '</a></div>';
                        }
                    } );

                    $( ".typ-widget.widget_E" ).html( callToActionButtonsHtml );
                }

                break;

            case "f":

                if( t.custom_html )
                {
                    var jQuery = typeof window.jQuery !== "undefined" ? window.jQuery : (typeof typ.jQuery !== "undefined" ? typ.jQuery : $);
                    var customHtml = '<div class="custom-html-holder">' + t.custom_html + '</div>';

                    try
                    {
                        $( ".typ-widget.widget_F" ).html( customHtml );
                    }
                    catch( err )
                    {
                        $( ".typ-widget.widget_F" ).html( "Error in Custom HTML: " + err.message );
                    }

                }

                break;

            case "g" :

                var maxLimit = typeof t.limit !== "undefined" && t.limit > 0 ? t.limit : 4;

                var recommendProductsHandles = [];

                // Upsells
                if( typeof yopifyTypLineItems === "object" && yopifyTypLineItems )
                {
                    for( var ii = 0; ii < yopifyTypLineItems.length; ii ++ )
                    {
                        var orderedHandle = yopifyTypLineItems[ii];
                        if( typeof t.recommended_products_upsell !== "undefined" && t.recommended_products_upsell && t.recommended_products_upsell[orderedHandle] !== "undefined" && t.recommended_products_upsell[orderedHandle] )
                        {
                            recommendProductsHandles = recommendProductsHandles.concat( t.recommended_products_upsell[orderedHandle] );
                        }
                    }
                }

                if( recommendProductsHandles.length < maxLimit )
                {
                    recommendProductsHandles = recommendProductsHandles.concat( this.getRandom( t.recommended_products, maxLimit - recommendProductsHandles.length ) );
                }

                recommendProductsHandles = this.getRandom( recommendProductsHandles, maxLimit );

                var productsHtml = '';

                if( recommendProductsHandles )
                {
                    var recommendedProductsTitleHtml = t.recommended_products_title ? '<h2>' + t.recommended_products_title + '</h2>' : '';
                    var recommendedProductsDescriptionHtml = t.recommended_products_description ? '<div class="recommened-products-description-holder">' + t.recommended_products_description + '</div>' : '';
                    var widgetGHtml = '<div class="recommended-products-holder">' + recommendedProductsTitleHtml + recommendedProductsDescriptionHtml + '<ul></ul></div>';

                    $( ".typ-widget.widget_G" ).html( widgetGHtml );

                    $.each( recommendProductsHandles, function( index, value )
                    {
                        if( typeof value !== "undefined" && value )
                        {
                            $.getJSON( 'https://' + Shopify.shop + '/products/' + value.trim() + '.json?callback=?', function( data )
                            {
                                var productPrice = data.product.variants[0].price;
                                productPrice = typ.format_money( productPrice * 100, typ.settings.money_format );
                                productPrice = typeof productPrice !== "undefined" ? productPrice : data.product.variants[0].price;
                                $( '.typ-widget.widget_G ul' ).append( "<li><a href='https://" + Shopify.shop + "/products/" + data.product.handle + "' title='" + data.product.title + "'><span class='recom-prod-img' style='background-image:url(" + data.product.image.src + ");'></span><h2>" + data.product.title + "</h2></a>" + productPrice + "</li> " );
                            } );
                        }
                    } );
                }

                break;

            case "h":

                /* $( ".content-box.typ-widget.widget_H" ).detach().appendTo( side === 'a' ? this.sectionContent : this.sidebarContent ); */

                break;

            case "i":

                $( ".content-box.typ-widget.widget_I" ).detach().appendTo( side === 'a' ? this.sectionContent : this.sidebarContent );

                break;

            default:

                break;
        }
    },
    instagramPhotosCallback: function( response )
    {
        if( typeof response !== "undefined"
            && typeof response.meta !== "undefined"
            && response.meta.code === 200
            && response.data.length
        )
        {
            for( var i = 0; i < response.data.length; i ++ )
            {

                // define media namespace
                var thisMedia = response.data[i],
                    singleImage = '', resolution;

                // if media type is image or videos is set to false
                if( thisMedia.type === 'image' && typeof thisMedia.images !== "undefined" )
                {
                    singleImage = '<a href="' + thisMedia.link + '" target="_blank" style="background-image:url(' + thisMedia.images.low_resolution.url + ');"></a>';
                }
                else if( thisMedia.type === 'video' && typeof thisMedia.images !== "undefined" )
                {
                    singleImage = '<a href="' + thisMedia.link + '" target="_blank" style="background-image:url(' + thisMedia.images.low_resolution.url + ');"></a>';
                }

                // append image / video
                if( singleImage !== '' && typeof singleImage !== "undefined" )
                {
                    $( ".typ-widget.widget_C .instagram-feed-holder" ).append( '<li>' + singleImage + '</li> ' );
                }
            }
        }
    },
    setupWidgets: function()
    {
        if( this.settings.order )
        {
            var widgets = [];

            var sideA = typeof this.settings.order.a !== "undefined" ? this.settings.order.a : '';
            var sideB = typeof this.settings.order.b !== "undefined" ? this.settings.order.b : '';

            if( sideA )
            {
                $.each( sideA, function( index, value )
                {
                    if( $.inArray( value, widgets ) === - 1 )
                    {

                        if( value !== 'h' && value !== 'i' )
                        {

                            typ.sectionContent.append( '<div class="typ-widget widget_' + value.toUpperCase() + '"></div>' );
                        }

                        typ.setupWidget( value, 'a' );

                        widgets.push( value );
                    }
                } );
            }

            if( sideB )
            {
                $.each( sideB, function( index, value )
                {
                    if( $.inArray( value, widgets ) === - 1 )
                    {
                        if( value !== 'h' && value !== 'i' )
                        {
                            typ.sidebarContent.append( '<div class="typ-widget widget_' + value.toUpperCase() + '"></div>' );
                        }

                        typ.setupWidget( value, 'b' );

                        widgets.push( value );
                    }
                } );
            }
        }
    }
};
typ.setup();
