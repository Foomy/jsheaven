<?php

/**
 * The Project Bootstrap
 *
 * @author      Sascha Schneider <sascha.schneider@vonaffenfels.de>
 *
 * @category    JSHeaven
 * @package     Application
 * @subpackage  Bootstrap
 */
class Bootstrap extends Zend_Application_Bootstrap_Bootstrap
{
	/**
	 * Initialises the view.
	 *
	 * @return Zend_View $view   The View Object.
	 */
	public function _initView()
	{
		$view = new Zend_View();

		$view->doctype('HTML5');

		$view->headTitle(TITLE_PREFIX . ' ' . PROJECT_TITLE);

		$view->headMeta()->setCharset('utf-8');
//		$view->headMeta()->appendHttpEquiv('Content-Style-Type', 'text/css');
//		$view->headMeta()->appendHttpEquiv('Content-Script-Type', 'text/javascript');

		$view->headScript()->appendFile('/js/jquery.js', 'text/javascript');
		$view->headScript()->appendFile('/js/Util.js', 'text/javascript');
		$view->headScript()->appendFile('/js/Trigger.js', 'text/javascript');

		$view->skin = 'default';

		$viewRenderer = Zend_Controller_Action_HelperBroker::getStaticHelper('viewRenderer');
		$viewRenderer->setView($view);

		return $view;
	}
}
